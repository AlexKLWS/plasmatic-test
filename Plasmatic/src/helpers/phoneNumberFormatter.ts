export default abstract class PhoneNumberFormatter {
  static formatPhone(phone: string, newPhone: string): string {
    if (newPhone.length < phone.length) {
      if (phone.endsWith('-')) {
        return this.formatNumber(newPhone.substring(0, newPhone.length - 1));
      } else if (phone.endsWith(') ')) {
        return this.formatNumber(newPhone.substring(0, newPhone.length - 2));
      }
      return this.formatNumber(newPhone);
    }
    return this.formatNumber(newPhone);
  }

  static formatNumber(text: string): string {
    const n = this.clearPhone(text);
    switch (n.length) {
      case 0:
        return '';
      case 1:
        return `(${n[0]}`;
      case 2:
        return `(${n[0]}${n[1]}`;
      case 3:
        return `(${n[0]}${n[1]}${n[2]}) `;
      case 4:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}`;
      case 5:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}`;
      case 6:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-`;
      case 7:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}`;
      case 8:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}-`;
      case 9:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}-${n[8]}`;
      case 10:
      default:
        return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}-${n[8]}${n[9]}`;
    }
  }

  static clearPhone(phone: string) {
    return phone.replace(/\D/g, '');
  }
}
