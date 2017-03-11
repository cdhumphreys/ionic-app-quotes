export class SettingsService {
  private toggled: boolean = false;

  changeToggle(toggleStatus: boolean) {
    this.toggled = toggleStatus;
  }

  getToggleStatus() {
    return this.toggled;
  }

}
