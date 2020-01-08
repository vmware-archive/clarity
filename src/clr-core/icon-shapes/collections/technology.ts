/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { administratorIcon, administratorIconName } from '../shapes/administrator';
import { applicationIcon, applicationIconName } from '../shapes/application';
import { applicationsIcon, applicationsIconName } from '../shapes/applications';
import { archiveIcon, archiveIconName } from '../shapes/archive';
import { assignUserIcon, assignUserIconName } from '../shapes/assign-user';
import { atomIcon, atomIconName } from '../shapes/atom';
import { backupIcon, backupIconName } from '../shapes/backup';
import { backupRestoreIcon, backupRestoreIconName } from '../shapes/backup-restore';
import { barCodeIcon, barCodeIconName } from '../shapes/bar-code';
import { batteryIcon, batteryIconName } from '../shapes/battery';
import { blockIcon, blockIconName } from '../shapes/block';
import { blocksGroupIcon, blocksGroupIconName } from '../shapes/blocks-group';
import { bluetoothIcon, bluetoothIconName } from '../shapes/bluetooth';
import { bluetoothOffIcon, bluetoothOffIconName } from '../shapes/bluetooth-off';
import { buildingIcon, buildingIconName } from '../shapes/building';
import { bundleIcon, bundleIconName } from '../shapes/bundle';
import { capacitorIcon, capacitorIconName } from '../shapes/capacitor';
import { cdDvdIcon, cdDvdIconName } from '../shapes/cd-dvd';
import { certificateIcon, certificateIconName } from '../shapes/certificate';
import { cloudNetworkIcon, cloudNetworkIconName } from '../shapes/cloud-network';
import { cloudScaleIcon, cloudScaleIconName } from '../shapes/cloud-scale';
import { cloudTrafficIcon, cloudTrafficIconName } from '../shapes/cloud-traffic';
import { clusterIcon, clusterIconName } from '../shapes/cluster';
import { codeIcon, codeIconName } from '../shapes/code';
import { computerIcon, computerIconName } from '../shapes/computer';
import { connectIcon, connectIconName } from '../shapes/connect';
import { containerIcon, containerIconName } from '../shapes/container';
import { containerVolumeIcon, containerVolumeIconName } from '../shapes/container-volume';
import { controlLunIcon, controlLunIconName } from '../shapes/control-lun';
import { cpuIcon, cpuIconName } from '../shapes/cpu';
import { dashboardIcon, dashboardIconName } from '../shapes/dashboard';
import { dataClusterIcon, dataClusterIconName } from '../shapes/data-cluster';
import { deployIcon, deployIconName } from '../shapes/deploy';
import { devicesIcon, devicesIconName } from '../shapes/devices';
import { disconnectIcon, disconnectIconName } from '../shapes/disconnect';
import { displayIcon, displayIconName } from '../shapes/display';
import { downloadCloudIcon, downloadCloudIconName } from '../shapes/download-cloud';
import { exportIcon, exportIconName } from '../shapes/export';
import { fileShareIcon, fileShareIconName } from '../shapes/file-share';
import { flaskIcon, flaskIconName } from '../shapes/flask';
import { floppyIcon, floppyIconName } from '../shapes/floppy';
import { hardDiskIcon, hardDiskIconName } from '../shapes/hard-disk';
import { hardDriveIcon, hardDriveIconName } from '../shapes/hard-drive';
import { hardDriveDisksIcon, hardDriveDisksIconName } from '../shapes/hard-drive-disks';
import { helixIcon, helixIconName } from '../shapes/helix';
import { hostIcon, hostIconName } from '../shapes/host';
import { hostGroupIcon, hostGroupIconName } from '../shapes/host-group';
import { importIcon, importIconName } from '../shapes/import';
import { inductorIcon, inductorIconName } from '../shapes/inductor';
import { installIcon, installIconName } from '../shapes/install';
import { keyboardIcon, keyboardIconName } from '../shapes/keyboard';
import { layersIcon, layersIconName } from '../shapes/layers';
import { linkIcon, linkIconName } from '../shapes/link';
import { mediaChangerIcon, mediaChangerIconName } from '../shapes/media-changer';
import { memoryIcon, memoryIconName } from '../shapes/memory';
import { mobileIcon, mobileIconName } from '../shapes/mobile';
import { mouseIcon, mouseIconName } from '../shapes/mouse';
import { namespaceIcon, namespaceIconName } from '../shapes/namespace';
import { networkGlobeIcon, networkGlobeIconName } from '../shapes/network-globe';
import { networkSettingsIcon, networkSettingsIconName } from '../shapes/network-settings';
import { networkSwitchIcon, networkSwitchIconName } from '../shapes/network-switch';
import { noWifiIcon, noWifiIconName } from '../shapes/no-wifi';
import { nodeIcon, nodeIconName } from '../shapes/node';
import { nodeGroupIcon, nodeGroupIconName } from '../shapes/node-group';
import { nodesIcon, nodesIconName } from '../shapes/nodes';
import { nvmeIcon, nvmeIconName } from '../shapes/nvme';
import { phoneHandsetIcon, phoneHandsetIconName } from '../shapes/phone-handset';
import { pluginIcon, pluginIconName } from '../shapes/plugin';
import { podIcon, podIconName } from '../shapes/pod';
import { processOnVmIcon, processOnVmIconName } from '../shapes/process-on-vm';
import { qrCodeIcon, qrCodeIconName } from '../shapes/qr-code';
import { rackServerIcon, rackServerIconName } from '../shapes/rack-server';
import { radarIcon, radarIconName } from '../shapes/radar';
import { resistorIcon, resistorIconName } from '../shapes/resistor';
import { resourcePoolIcon, resourcePoolIconName } from '../shapes/resource-pool';
import { routerIcon, routerIconName } from '../shapes/router';
import { rulerPencilIcon, rulerPencilIconName } from '../shapes/ruler-pencil';
import { shieldIcon, shieldIconName } from '../shapes/shield';
import { shieldCheckIcon, shieldCheckIconName } from '../shapes/shield-check';
import { shieldXIcon, shieldXIconName } from '../shapes/shield-x';
import { squidIcon, squidIconName } from '../shapes/squid';
import { ssdIcon, ssdIconName } from '../shapes/ssd';
import { storageIcon, storageIconName } from '../shapes/storage';
import { storageAdapterIcon, storageAdapterIconName } from '../shapes/storage-adapter';
import { tabletIcon, tabletIconName } from '../shapes/tablet';
import { tapeDriveIcon, tapeDriveIconName } from '../shapes/tape-drive';
import { terminalIcon, terminalIconName } from '../shapes/terminal';
import { unarchiveIcon, unarchiveIconName } from '../shapes/unarchive';
import { uninstallIcon, uninstallIconName } from '../shapes/uninstall';
import { unlinkIcon, unlinkIconName } from '../shapes/unlink';
import { uploadCloudIcon, uploadCloudIconName } from '../shapes/upload-cloud';
import { usbIcon, usbIconName } from '../shapes/usb';
import { vmIcon, vmIconName } from '../shapes/vm';
import { vmwAppIcon, vmwAppIconName } from '../shapes/vmw-app';
import { wifiIcon, wifiIconName } from '../shapes/wifi';

export const technologyCollectionIcons: IconShapeTuple[] = [
  administratorIcon,
  applicationIcon,
  applicationsIcon,
  archiveIcon,
  assignUserIcon,
  atomIcon,
  backupIcon,
  backupRestoreIcon,
  barCodeIcon,
  batteryIcon,
  blockIcon,
  blocksGroupIcon,
  bluetoothIcon,
  bluetoothOffIcon,
  buildingIcon,
  bundleIcon,
  capacitorIcon,
  cdDvdIcon,
  certificateIcon,
  cloudNetworkIcon,
  cloudScaleIcon,
  cloudTrafficIcon,
  clusterIcon,
  codeIcon,
  computerIcon,
  connectIcon,
  containerIcon,
  containerVolumeIcon,
  controlLunIcon,
  cpuIcon,
  dashboardIcon,
  dataClusterIcon,
  deployIcon,
  devicesIcon,
  disconnectIcon,
  displayIcon,
  downloadCloudIcon,
  exportIcon,
  fileShareIcon,
  flaskIcon,
  floppyIcon,
  hardDriveIcon,
  hardDriveDisksIcon,
  hardDiskIcon,
  helixIcon,
  hostIcon,
  hostGroupIcon,
  importIcon,
  inductorIcon,
  installIcon,
  keyboardIcon,
  layersIcon,
  linkIcon,
  mediaChangerIcon,
  memoryIcon,
  mobileIcon,
  mouseIcon,
  namespaceIcon,
  networkGlobeIcon,
  networkSettingsIcon,
  networkSwitchIcon,
  nodeGroupIcon,
  nodeIcon,
  nodesIcon,
  noWifiIcon,
  nvmeIcon,
  phoneHandsetIcon,
  pluginIcon,
  podIcon,
  processOnVmIcon,
  qrCodeIcon,
  rackServerIcon,
  radarIcon,
  resistorIcon,
  resourcePoolIcon,
  routerIcon,
  rulerPencilIcon,
  shieldIcon,
  shieldCheckIcon,
  shieldXIcon,
  squidIcon,
  ssdIcon,
  storageIcon,
  storageAdapterIcon,
  tabletIcon,
  tapeDriveIcon,
  terminalIcon,
  unarchiveIcon,
  uninstallIcon,
  unlinkIcon,
  uploadCloudIcon,
  usbIcon,
  vmIcon,
  vmwAppIcon,
  wifiIcon,
];

export const technologyCollectionAliases: IconAlias[] = [
  [hostIconName, ['server']],
  [terminalIconName, ['command']],
  [mobileIconName, ['mobile-phone']],
  [certificateIconName, ['license']],
  [noWifiIconName, ['disconnected']],
  [phoneHandsetIconName, ['receiver']],
  [rulerPencilIconName, ['design']],
  [helixIconName, ['dna']],
];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadTechnologyIconSet } from '@clr/core/icon-shapes';
 *
 * loadTechnologyIconSet();
 * ```
 *
 */
export function loadTechnologyIconSet() {
  ClarityIcons.addIcons(...technologyCollectionIcons);
  ClarityIcons.addAliases(...technologyCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [administratorIconName]: string;
    [applicationIconName]: string;
    [applicationsIconName]: string;
    [archiveIconName]: string;
    [assignUserIconName]: string;
    [atomIconName]: string;
    [backupIconName]: string;
    [backupRestoreIconName]: string;
    [barCodeIconName]: string;
    [batteryIconName]: string;
    [blockIconName]: string;
    [blocksGroupIconName]: string;
    [bluetoothIconName]: string;
    [bluetoothOffIconName]: string;
    [buildingIconName]: string;
    [bundleIconName]: string;
    [capacitorIconName]: string;
    [cdDvdIconName]: string;
    [certificateIconName]: string;
    [cloudNetworkIconName]: string;
    [cloudScaleIconName]: string;
    [cloudTrafficIconName]: string;
    [clusterIconName]: string;
    [codeIconName]: string;
    [computerIconName]: string;
    [connectIconName]: string;
    [containerIconName]: string;
    [containerVolumeIconName]: string;
    [controlLunIconName]: string;
    [cpuIconName]: string;
    [dashboardIconName]: string;
    [dataClusterIconName]: string;
    [deployIconName]: string;
    [devicesIconName]: string;
    [disconnectIconName]: string;
    [displayIconName]: string;
    [downloadCloudIconName]: string;
    [exportIconName]: string;
    [fileShareIconName]: string;
    [flaskIconName]: string;
    [floppyIconName]: string;
    [hardDriveIconName]: string;
    [hardDriveDisksIconName]: string;
    [hardDiskIconName]: string;
    [helixIconName]: string;
    [hostIconName]: string;
    [hostGroupIconName]: string;
    [importIconName]: string;
    [inductorIconName]: string;
    [installIconName]: string;
    [keyboardIconName]: string;
    [layersIconName]: string;
    [linkIconName]: string;
    [mediaChangerIconName]: string;
    [memoryIconName]: string;
    [mobileIconName]: string;
    [mouseIconName]: string;
    [namespaceIconName]: string;
    [networkGlobeIconName]: string;
    [networkSettingsIconName]: string;
    [networkSwitchIconName]: string;
    [nodeGroupIconName]: string;
    [nodeIconName]: string;
    [nodesIconName]: string;
    [noWifiIconName]: string;
    [nvmeIconName]: string;
    [phoneHandsetIconName]: string;
    [pluginIconName]: string;
    [podIconName]: string;
    [processOnVmIconName]: string;
    [qrCodeIconName]: string;
    [rackServerIconName]: string;
    [radarIconName]: string;
    [resistorIconName]: string;
    [resourcePoolIconName]: string;
    [routerIconName]: string;
    [rulerPencilIconName]: string;
    [shieldIconName]: string;
    [shieldCheckIconName]: string;
    [shieldXIconName]: string;
    [squidIconName]: string;
    [ssdIconName]: string;
    [storageIconName]: string;
    [storageAdapterIconName]: string;
    [tabletIconName]: string;
    [tapeDriveIconName]: string;
    [terminalIconName]: string;
    [unarchiveIconName]: string;
    [uninstallIconName]: string;
    [unlinkIconName]: string;
    [uploadCloudIconName]: string;
    [usbIconName]: string;
    [vmIconName]: string;
    [vmwAppIconName]: string;
    [wifiIconName]: string;
  }
}
