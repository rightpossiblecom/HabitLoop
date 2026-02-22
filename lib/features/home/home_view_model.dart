import 'dart:convert';
import 'package:flutter/material.dart';
import '../../core/constants/app_constants.dart';
import '../../core/services/storage_service.dart';

class HomeViewModel extends ChangeNotifier {
  String _habitName = 'Add a Habit';
  int _currentStreak = 0;
  int _longestStreak = 0;

  // A map of Date string (yyyy-MM-dd) to boolean (completed)
  Map<String, bool> _history = {};

  String get habitName => _habitName;
  int get currentStreak => _currentStreak;
  int get longestStreak => _longestStreak;

  bool get hasHabit => _habitName.isNotEmpty && _habitName != 'Add a Habit';

  HomeViewModel() {
    _loadData();
    _checkMissedDays();
  }

  void _loadData() {
    _habitName =
        StorageService.getString(AppConstants.keyHabitName) ?? 'Add a Habit';
    _currentStreak = StorageService.getInt(AppConstants.keyCurrentStreak);
    _longestStreak = StorageService.getInt(AppConstants.keyLongestStreak);

    final historyData = StorageService.getString(AppConstants.keyHistory);
    if (historyData != null) {
      try {
        final decoded = jsonDecode(historyData) as Map<String, dynamic>;
        _history = decoded.map((key, value) => MapEntry(key, value as bool));
      } catch (_) {
        _history = {};
      }
    }
  }

  String _todayKey() {
    final now = DateTime.now();
    return '${now.year}-${now.month.toString().padLeft(2, '0')}-${now.day.toString().padLeft(2, '0')}';
  }

  bool isCompletedToday() {
    return _history[_todayKey()] == true;
  }

  // Determine if a day was missed strictly by checking if "yesterday" has an entry
  // If no entry exists for yesterday, and we are not starting on day 0, reset streak.
  void _checkMissedDays() {
    if (_currentStreak == 0) return;

    final yesterday = DateTime.now().subtract(const Duration(days: 1));
    final yesterdayKey =
        '${yesterday.year}-${yesterday.month.toString().padLeft(2, '0')}-${yesterday.day.toString().padLeft(2, '0')}';

    // If we completed today already, or we completed yesterday, streak is alive.
    if (isCompletedToday() || _history[yesterdayKey] == true) {
      return;
    }

    // Otherwise, we missed yesterday. Reset streak.
    _currentStreak = 0;
    StorageService.saveInt(AppConstants.keyCurrentStreak, _currentStreak);
    notifyListeners();
  }

  void saveHabitName(String name) {
    _habitName = name.trim();
    StorageService.saveString(AppConstants.keyHabitName, _habitName);
    notifyListeners();
  }

  void markCompleted() {
    if (isCompletedToday() || !hasHabit) return;

    _history[_todayKey()] = true;
    _currentStreak++;

    if (_currentStreak > _longestStreak) {
      _longestStreak = _currentStreak;
      StorageService.saveInt(AppConstants.keyLongestStreak, _longestStreak);
    }

    StorageService.saveInt(AppConstants.keyCurrentStreak, _currentStreak);
    StorageService.saveString(AppConstants.keyHistory, jsonEncode(_history));

    notifyListeners();
  }

  void resetData() {
    _habitName = 'Add a Habit';
    _currentStreak = 0;
    _longestStreak = 0;
    _history = {};

    // Clear only habit data, retain theme/preferences
    StorageService.saveString(AppConstants.keyHabitName, _habitName);
    StorageService.saveInt(AppConstants.keyCurrentStreak, _currentStreak);
    StorageService.saveInt(AppConstants.keyLongestStreak, _longestStreak);
    StorageService.saveString(AppConstants.keyHistory, jsonEncode(_history));

    notifyListeners();
  }

  // Expose history for history view
  List<MapEntry<String, bool>> getSortedHistory() {
    final entries = _history.entries.toList();
    entries.sort((a, b) => b.key.compareTo(a.key)); // descending
    return entries;
  }
}
