import { SettingsRepository } from "./settings-repository";

export interface OpeningHours {
  day: string;
  hours: string;
}

export interface ContactPageData {
  phone: string;
  email: string;
  address: string;
  openingHours: OpeningHours[];
  reservationUrl: string;
}

export class ContactRepository {
  static async getContactData(): Promise<ContactPageData> {
    const settings = await SettingsRepository.getSiteSettings();
    return {
      phone: settings?.contact?.phone || "",
      email: settings?.contact?.email || "",
      address: settings?.contact?.address || "",
      openingHours: settings?.footer?.openingHours || [],
      reservationUrl: settings?.reservationUrl || "",
    };
  }
}
