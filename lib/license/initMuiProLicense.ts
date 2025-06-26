import { LicenseInfo } from '@mui/x-license-pro';

export function initMuiProLicense(licenseKey?: string) {
  const key = licenseKey || '';

  if (!key) {
    console.warn(
      '[Design System] Nenhuma license key do MUI Pro foi fornecida. Defina uma manualmente ou em VITE_MUI_PRO_KEY.'
    );
  }

  LicenseInfo.setLicenseKey(key);
}