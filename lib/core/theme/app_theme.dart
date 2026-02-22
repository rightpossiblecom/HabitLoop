import 'package:flutter/material.dart';

class AppTheme {
  // Primary brand colors from the landing page
  static const Color _primaryColor = Color(0xFF6366F1); // Indigo-500
  static const Color _secondaryColor = Color(0xFF10B981); // Emerald-500

  static ThemeData lightTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    colorScheme: ColorScheme.fromSeed(
      seedColor: _primaryColor,
      primary: _primaryColor,
      secondary: _secondaryColor,
      brightness: Brightness.light,
      surface: const Color(0xFFFAFAFA), // Zinc-50
      onSurface: const Color(0xFF09090B), // Zinc-950
    ),
    scaffoldBackgroundColor: const Color(0xFFFAFAFA),
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.transparent,
      elevation: 0,
      centerTitle: false,
      iconTheme: IconThemeData(color: Color(0xFF09090B)),
      titleTextStyle: TextStyle(
        color: Color(0xFF09090B),
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
    ),
    cardTheme: const CardThemeData(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(24)),
        side: BorderSide(color: Color(0xFFE4E4E7)), // Zinc-200
      ),
      color: Colors.white,
    ),
  );

  static ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(
      seedColor: _primaryColor,
      primary: _primaryColor,
      secondary: _secondaryColor,
      brightness: Brightness.dark,
      surface: const Color(0xFF18181B), // Zinc-900
      onSurface: const Color(0xFFFAFAFA), // Zinc-50
    ),
    scaffoldBackgroundColor: const Color(0xFF09090B), // Zinc-950
    appBarTheme: const AppBarTheme(
      backgroundColor: Colors.transparent,
      elevation: 0,
      centerTitle: false,
      iconTheme: IconThemeData(color: Color(0xFFFAFAFA)),
      titleTextStyle: TextStyle(
        color: Color(0xFFFAFAFA),
        fontSize: 20,
        fontWeight: FontWeight.bold,
      ),
    ),
    cardTheme: const CardThemeData(
      elevation: 0,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.all(Radius.circular(24)),
        side: BorderSide(color: Color(0xFF27272A)), // Zinc-800
      ),
      color: Color(0xFF18181B), // Zinc-900
    ),
  );
}
