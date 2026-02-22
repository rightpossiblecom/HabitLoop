import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'home_view_model.dart';
import '../settings/settings_screen.dart';
import '../about/about_screen.dart';
import 'package:intl/intl.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return Scaffold(
      body: Consumer<HomeViewModel>(
        builder: (context, viewModel, child) {
          final isDone = viewModel.isCompletedToday();

          return SafeArea(
            child: Column(
              children: [
                _buildHeader(context, viewModel, colorScheme),
                if (viewModel.currentStreak == 0 &&
                    viewModel.longestStreak > 0 &&
                    !isDone)
                  _buildRestartBanner(colorScheme),
                Expanded(
                  child: Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        _buildActionDisplay(viewModel, colorScheme, theme),
                        const SizedBox(height: 48),
                        _buildMainActionButton(
                          context,
                          viewModel,
                          isDone,
                          colorScheme,
                        ),
                      ],
                    ),
                  ),
                ),
                _buildFooter(context, colorScheme),
              ],
            ),
          );
        },
      ),
    );
  }

  Widget _buildHeader(
    BuildContext context,
    HomeViewModel viewModel,
    ColorScheme colorScheme,
  ) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                DateFormat('MMMM d').format(DateTime.now()).toUpperCase(),
                style: TextStyle(
                  fontSize: 12,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 1.2,
                  color: colorScheme.onSurface.withOpacity(0.5),
                ),
              ),
              const Text(
                'Today',
                style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
              ),
            ],
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                colors: [Color(0xFFF59E0B), Color(0xFFEF4444)], // Amber to Red
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
              ),
              borderRadius: BorderRadius.circular(20),
              boxShadow: [
                BoxShadow(
                  color: const Color(0xFFF59E0B).withOpacity(0.3),
                  blurRadius: 12,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: Row(
              children: [
                const Icon(
                  CupertinoIcons.flame_fill,
                  color: Colors.white,
                  size: 20,
                ),
                const SizedBox(width: 6),
                Text(
                  '${viewModel.currentStreak}',
                  style: const TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 18,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildRestartBanner(ColorScheme colorScheme) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 24, vertical: 8),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: colorScheme.primary.withOpacity(0.1),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: colorScheme.primary.withOpacity(0.2)),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(CupertinoIcons.sparkles, color: colorScheme.primary, size: 20),
          const SizedBox(width: 8),
          Text(
            'Start your loop again today.',
            style: TextStyle(
              color: colorScheme.primary,
              fontWeight: FontWeight.bold,
              fontSize: 14,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildActionDisplay(
    HomeViewModel viewModel,
    ColorScheme colorScheme,
    ThemeData theme,
  ) {
    return Column(
      children: [
        Text(
          "TODAY'S ACTION",
          style: TextStyle(
            fontSize: 12,
            fontWeight: FontWeight.bold,
            letterSpacing: 1.5,
            color: colorScheme.onSurface.withOpacity(0.5),
          ),
        ),
        const SizedBox(height: 16),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 32),
          child: Text(
            viewModel.habitName,
            textAlign: TextAlign.center,
            style: theme.textTheme.headlineMedium?.copyWith(
              fontWeight: FontWeight.w800,
              color: colorScheme.onSurface,
              height: 1.2,
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildMainActionButton(
    BuildContext context,
    HomeViewModel viewModel,
    bool isDone,
    ColorScheme colorScheme,
  ) {
    if (!viewModel.hasHabit) {
      return FilledButton.icon(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (_) => const SettingsScreen()),
          );
        },
        icon: const Icon(CupertinoIcons.add),
        label: const Text('Set Your Action'),
        style: FilledButton.styleFrom(
          padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
        ),
      );
    }

    return Column(
      children: [
        GestureDetector(
          onTap: isDone ? null : () => viewModel.markCompleted(),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeOutBack,
            height: 160,
            width: 160,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: isDone
                  ? colorScheme.secondary.withOpacity(0.1)
                  : colorScheme.primary.withOpacity(0.1),
              border: Border.all(
                color: isDone
                    ? colorScheme.secondary.withOpacity(0.3)
                    : colorScheme.primary.withOpacity(0.3),
                width: 2,
              ),
              boxShadow: [
                if (!isDone)
                  BoxShadow(
                    color: colorScheme.primary.withOpacity(0.2),
                    blurRadius: 40,
                    offset: const Offset(0, 10),
                  ),
              ],
            ),
            child: Center(
              child: Container(
                height: 120,
                width: 120,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: isDone ? colorScheme.secondary : colorScheme.primary,
                  boxShadow: [
                    BoxShadow(
                      color:
                          (isDone ? colorScheme.secondary : colorScheme.primary)
                              .withOpacity(0.4),
                      blurRadius: 20,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: Center(
                  child: Icon(
                    CupertinoIcons.check_mark,
                    size: 64,
                    color: colorScheme.onPrimary,
                  ),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 24),
        Text(
          isDone ? 'Completed today.' : 'Mark as Completed',
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.bold,
            color: isDone ? colorScheme.secondary : colorScheme.primary,
          ),
        ),
      ],
    );
  }

  Widget _buildFooter(BuildContext context, ColorScheme colorScheme) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24, top: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _buildFooterItem(
            context,
            icon: CupertinoIcons.time,
            label: 'History',
            onTap: () => _showHistoryModal(context),
            color: colorScheme.onSurface.withOpacity(0.6),
          ),
          _buildFooterItem(
            context,
            icon: CupertinoIcons.settings,
            label: 'Settings',
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const SettingsScreen()),
              );
            },
            color: colorScheme.onSurface.withOpacity(0.6),
          ),
          _buildFooterItem(
            context,
            icon: CupertinoIcons.info_circle,
            label: 'About',
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const AboutScreen()),
              );
            },
            color: colorScheme.onSurface.withOpacity(0.6),
          ),
        ],
      ),
    );
  }

  Widget _buildFooterItem(
    BuildContext context, {
    required IconData icon,
    required String label,
    required VoidCallback onTap,
    required Color color,
  }) {
    return GestureDetector(
      onTap: onTap,
      behavior: HitTestBehavior.opaque,
      child: Column(
        children: [
          Icon(icon, color: color, size: 24),
          const SizedBox(height: 4),
          Text(
            label,
            style: TextStyle(
              fontSize: 12,
              fontWeight: FontWeight.w600,
              color: color,
            ),
          ),
        ],
      ),
    );
  }

  void _showHistoryModal(BuildContext context) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (context) => const _HistoryModal(),
    );
  }
}

class _HistoryModal extends StatelessWidget {
  const _HistoryModal();

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final colorScheme = theme.colorScheme;

    return DraggableScrollableSheet(
      initialChildSize: 0.8,
      minChildSize: 0.5,
      maxChildSize: 0.9,
      builder: (_, controller) {
        return Container(
          decoration: BoxDecoration(
            color: theme.scaffoldBackgroundColor,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(32)),
          ),
          child: Consumer<HomeViewModel>(
            builder: (context, viewModel, _) {
              final history = viewModel.getSortedHistory();

              return Column(
                children: [
                  const SizedBox(height: 12),
                  Container(
                    width: 48,
                    height: 6,
                    decoration: BoxDecoration(
                      color: colorScheme.onSurface.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(3),
                    ),
                  ),
                  const SizedBox(height: 24),
                  Text(
                    'Your Loop History',
                    style: theme.textTheme.titleLarge?.copyWith(
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      _buildStatBox(
                        'Current Streak',
                        '${viewModel.currentStreak}',
                        colorScheme,
                      ),
                      _buildStatBox(
                        'Longest Streak',
                        '${viewModel.longestStreak}',
                        colorScheme,
                      ),
                    ],
                  ),
                  const SizedBox(height: 32),
                  Expanded(
                    child: history.isEmpty
                        ? Center(
                            child: Text(
                              'No history yet.\nStart your loop today!',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: colorScheme.onSurface.withOpacity(0.5),
                                fontSize: 16,
                              ),
                            ),
                          )
                        : ListView.separated(
                            controller: controller,
                            padding: const EdgeInsets.symmetric(
                              horizontal: 24,
                              vertical: 8,
                            ),
                            itemCount: history.length,
                            separatorBuilder: (_, __) => Divider(
                              height: 1,
                              color: colorScheme.onSurface.withOpacity(0.05),
                            ),
                            itemBuilder: (context, index) {
                              final entry = history[index];
                              final dateStr = entry.key;
                              final isCompleted = entry.value;

                              // Parse date back for display
                              final parts = dateStr.split('-');
                              if (parts.length != 3) return const SizedBox();
                              final date = DateTime(
                                int.parse(parts[0]),
                                int.parse(parts[1]),
                                int.parse(parts[2]),
                              );

                              return ListTile(
                                contentPadding: EdgeInsets.zero,
                                leading: Container(
                                  height: 40,
                                  width: 40,
                                  decoration: BoxDecoration(
                                    color:
                                        (isCompleted
                                                ? colorScheme.secondary
                                                : colorScheme.error)
                                            .withOpacity(0.1),
                                    shape: BoxShape.circle,
                                  ),
                                  child: Icon(
                                    isCompleted
                                        ? CupertinoIcons.check_mark
                                        : CupertinoIcons.xmark,
                                    color: isCompleted
                                        ? colorScheme.secondary
                                        : colorScheme.error,
                                    size: 20,
                                  ),
                                ),
                                title: Text(
                                  DateFormat('EEEE, MMMM d, yyyy').format(date),
                                  style: const TextStyle(
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                                trailing: Text(
                                  isCompleted ? 'Completed' : 'Missed',
                                  style: TextStyle(
                                    color: isCompleted
                                        ? colorScheme.secondary
                                        : colorScheme.error,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                              );
                            },
                          ),
                  ),
                ],
              );
            },
          ),
        );
      },
    );
  }

  Widget _buildStatBox(String title, String value, ColorScheme colorScheme) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
      decoration: BoxDecoration(
        color: colorScheme.surface,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: colorScheme.onSurface.withOpacity(0.1)),
      ),
      child: Column(
        children: [
          Text(
            title.toUpperCase(),
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.bold,
              letterSpacing: 1.2,
              color: colorScheme.onSurface.withOpacity(0.5),
            ),
          ),
          const SizedBox(height: 8),
          Text(
            value,
            style: TextStyle(
              fontSize: 28,
              fontWeight: FontWeight.bold,
              color: colorScheme.primary,
            ),
          ),
        ],
      ),
    );
  }
}
