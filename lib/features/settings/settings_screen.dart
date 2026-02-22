import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../core/constants/app_constants.dart';
import '../home/home_view_model.dart';
import 'settings_view_model.dart';

class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  Future<void> _launchUrl(String url) async {
    final uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      debugPrint('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Scaffold(
      appBar: AppBar(title: const Text('Settings')),
      body: Consumer2<SettingsViewModel, HomeViewModel>(
        builder: (context, settings, home, _) {
          return ListView(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            children: [
              _buildSectionHeader('Preferences', colorScheme),
              Card(
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(
                        settings.isDarkMode
                            ? CupertinoIcons.moon_fill
                            : CupertinoIcons.sun_max_fill,
                        color: colorScheme.primary,
                      ),
                      title: const Text('Dark Mode'),
                      trailing: Switch.adaptive(
                        value: settings.isDarkMode,
                        onChanged: (val) => settings.toggleTheme(),
                        activeColor: colorScheme.primary,
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              _buildSectionHeader('Data Management', colorScheme),
              Card(
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.pencil,
                        color: colorScheme.primary,
                      ),
                      title: const Text('Change Habit Action'),
                      subtitle: Text(home.habitName),
                      onTap: () => _showChangeHabitDialog(context, home),
                    ),
                    const Divider(height: 1, indent: 56),
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.trash,
                        color: colorScheme.error,
                      ),
                      title: Text(
                        'Reset Data',
                        style: TextStyle(color: colorScheme.error),
                      ),
                      subtitle: const Text('Clear all history and streaks'),
                      onTap: () => _showResetDataDialog(context, home),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 24),
              _buildSectionHeader('About & Legal', colorScheme),
              Card(
                child: Column(
                  children: [
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.shield,
                        color: colorScheme.primary,
                      ),
                      title: const Text('Privacy Policy'),
                      trailing: const Icon(
                        CupertinoIcons.chevron_right,
                        size: 16,
                      ),
                      onTap: () => _launchUrl(AppConstants.privacyPolicyUrl),
                    ),
                    const Divider(height: 1, indent: 56),
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.doc_text,
                        color: colorScheme.primary,
                      ),
                      title: const Text('Terms of Service'),
                      trailing: const Icon(
                        CupertinoIcons.chevron_right,
                        size: 16,
                      ),
                      onTap: () => _launchUrl(AppConstants.termsOfServiceUrl),
                    ),
                    const Divider(height: 1, indent: 56),
                    ListTile(
                      leading: Icon(
                        CupertinoIcons.mail,
                        color: colorScheme.primary,
                      ),
                      title: const Text('Contact Support'),
                      trailing: const Icon(
                        CupertinoIcons.chevron_right,
                        size: 16,
                      ),
                      onTap: () => _launchUrl(
                        'mailto:${AppConstants.supportEmail}?subject=HabitLoop Support',
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 32),
              Center(
                child: Text(
                  'Version ${AppConstants.appVersion}',
                  style: Theme.of(context).textTheme.bodySmall?.copyWith(
                    color: colorScheme.onSurface.withOpacity(0.5),
                  ),
                ),
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildSectionHeader(String title, ColorScheme colorScheme) {
    return Padding(
      padding: const EdgeInsets.only(left: 16, bottom: 8),
      child: Text(
        title.toUpperCase(),
        style: TextStyle(
          fontSize: 12,
          fontWeight: FontWeight.bold,
          color: colorScheme.onSurface.withOpacity(0.5),
          letterSpacing: 1.2,
        ),
      ),
    );
  }

  void _showChangeHabitDialog(BuildContext context, HomeViewModel home) {
    final controller = TextEditingController(
      text: home.habitName == 'Add a Habit' ? '' : home.habitName,
    );

    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Change Habit'),
        content: TextField(
          controller: controller,
          decoration: const InputDecoration(
            hintText: 'e.g., Read for 10 minutes',
          ),
          autofocus: true,
          textCapitalization: TextCapitalization.sentences,
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          FilledButton(
            onPressed: () {
              if (controller.text.trim().isNotEmpty) {
                home.saveHabitName(controller.text);
              }
              Navigator.pop(context);
            },
            child: const Text('Save'),
          ),
        ],
      ),
    );
  }

  void _showResetDataDialog(BuildContext context, HomeViewModel home) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Reset All Data?'),
        content: const Text(
          'This will permanently delete your current habit, all history, and streaks. This action cannot be undone.',
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(
              backgroundColor: Theme.of(context).colorScheme.error,
              foregroundColor: Theme.of(context).colorScheme.onError,
            ),
            onPressed: () {
              home.resetData();
              Navigator.pop(context);
            },
            child: const Text('Delete Data'),
          ),
        ],
      ),
    );
  }
}
