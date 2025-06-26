"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initMuiProLicense = initMuiProLicense;
var x_license_pro_1 = require("@mui/x-license-pro");
function initMuiProLicense(licenseKey) {
    var key = licenseKey || '';
    if (!key) {
        console.warn('[Design System] Nenhuma license key do MUI Pro foi fornecida. Defina uma manualmente ou em VITE_MUI_PRO_KEY.');
    }
    x_license_pro_1.LicenseInfo.setLicenseKey(key);
}
