import 'package:flutter/material.dart';
import '../../core/constants/app_constants.dart';
import '../../core/services/storage_service.dart';

class SettingsViewModel extends ChangeNotifier {
  ThemeMode _themeMode = ThemeMode.system;

  ThemeMode get themeMode => _themeMode;
  bool get isDarkMode => _themeMode == ThemeMode.dark;

  SettingsViewModel() {
    _loadTheme();
  }

  void _loadTheme() {
    final isDark = StorageService.getBool(
      AppConstants.keyIsDarkMode,
      defaultValue: false,
    );
    _themeMode = isDark ? ThemeMode.dark : ThemeMode.light;
    notifyListeners();
  }

  void toggleTheme() {
    _themeMode = isDarkMode ? ThemeMode.light : ThemeMode.dark;
    StorageService.saveBool(AppConstants.keyIsDarkMode, isDarkMode);
    notifyListeners();
  }
}
