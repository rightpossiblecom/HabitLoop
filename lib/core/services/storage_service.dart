import 'dart:convert';
import 'package:hive_flutter/hive_flutter.dart';

class StorageService {
  static const String _defaultBox = 'app_data';

  static Future<void> init() async {
    await Hive.initFlutter();
    await Hive.openBox<String>(_defaultBox);
  }

  // Generic Operations
  static Box<String> get _box => Hive.box<String>(_defaultBox);

  static void saveString(String key, String value) {
    _box.put(key, value);
  }

  static String? getString(String key) {
    return _box.get(key);
  }

  static void saveBool(String key, bool value) {
    _box.put(key, value.toString());
  }

  static bool getBool(String key, {bool defaultValue = false}) {
    final val = _box.get(key);
    if (val == null) return defaultValue;
    return val.toLowerCase() == 'true';
  }

  static void saveInt(String key, int value) {
    _box.put(key, value.toString());
  }

  static int getInt(String key, {int defaultValue = 0}) {
    final val = _box.get(key);
    if (val == null) return defaultValue;
    return int.tryParse(val) ?? defaultValue;
  }

  static void saveJson(String key, Map<String, dynamic> json) {
    _box.put(key, jsonEncode(json));
  }

  static Map<String, dynamic>? getJson(String key) {
    final val = _box.get(key);
    if (val == null) return null;
    try {
      return jsonDecode(val) as Map<String, dynamic>;
    } catch (_) {
      return null;
    }
  }

  static Future<void> clearAll() async {
    await _box.clear();
  }
}
