export type ToastEvent = {
  level: ToastLevel,
  message: string,
  duration: 3000 | 5000 | 8000 | 10000,
  icon?: ToastIcon
}

export type ToastLevel = 'error' | 'success' | 'info';

export type Toasts = ToastEvent[];

export type ToastIcon = 'info' | 'highlight_off' | 'task_alt' | 'help_outline' | 'report_problem' | 'update' | 'lightbulb';
