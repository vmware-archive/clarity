/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { administratorIcon, administratorIconName } from '../shapes/administrator.js';
import { animationIcon, animationIconName } from '../shapes/animation.js';
import { applicationIcon, applicationIconName } from '../shapes/application.js';
import { applicationsIcon, applicationsIconName } from '../shapes/applications.js';
import { archiveIcon, archiveIconName } from '../shapes/archive.js';
import { assignUserIcon, assignUserIconName } from '../shapes/assign-user.js';
import { atomIcon, atomIconName } from '../shapes/atom.js';
import { backupRestoreIcon, backupRestoreIconName } from '../shapes/backup-restore.js';
import { backupIcon, backupIconName } from '../shapes/backup.js';
import { barCodeIcon, barCodeIconName } from '../shapes/bar-code.js';
import { batteryIcon, batteryIconName } from '../shapes/battery.js';
import { blockIcon, blockIconName } from '../shapes/block.js';
import { blocksGroupIcon, blocksGroupIconName } from '../shapes/blocks-group.js';
import { bluetoothOffIcon, bluetoothOffIconName } from '../shapes/bluetooth-off.js';
import { bluetoothIcon, bluetoothIconName } from '../shapes/bluetooth.js';
import { buildingIcon, buildingIconName } from '../shapes/building.js';
import { bundleIcon, bundleIconName } from '../shapes/bundle.js';
import { capacitorIcon, capacitorIconName } from '../shapes/capacitor.js';
import { cdDvdIcon, cdDvdIconName } from '../shapes/cd-dvd.js';
import { certificateIcon, certificateIconName } from '../shapes/certificate.js';
import { ciCdIcon, ciCdIconName } from '../shapes/ci-cd.js';
import { cloudNetworkIcon, cloudNetworkIconName } from '../shapes/cloud-network.js';
import { cloudScaleIcon, cloudScaleIconName } from '../shapes/cloud-scale.js';
import { cloudTrafficIcon, cloudTrafficIconName } from '../shapes/cloud-traffic.js';
import { clusterIcon, clusterIconName } from '../shapes/cluster.js';
import { codeIcon, codeIconName } from '../shapes/code.js';
import { computerIcon, computerIconName } from '../shapes/computer.js';
import { connectIcon, connectIconName } from '../shapes/connect.js';
import { containerVolumeIcon, containerVolumeIconName } from '../shapes/container-volume.js';
import { containerIcon, containerIconName } from '../shapes/container.js';
import { controlLunIcon, controlLunIconName } from '../shapes/control-lun.js';
import { cpuIcon, cpuIconName } from '../shapes/cpu.js';
import { dashboardIcon, dashboardIconName } from '../shapes/dashboard.js';
import { dataClusterIcon, dataClusterIconName } from '../shapes/data-cluster.js';
import { deployIcon, deployIconName } from '../shapes/deploy.js';
import { devicesIcon, devicesIconName } from '../shapes/devices.js';
import { disconnectIcon, disconnectIconName } from '../shapes/disconnect.js';
import { displayIcon, displayIconName } from '../shapes/display.js';
import { downloadCloudIcon, downloadCloudIconName } from '../shapes/download-cloud.js';
import { exportIcon, exportIconName } from '../shapes/export.js';
import { fileShare2Icon, fileShare2IconName } from '../shapes/file-share-2.js';
import { fileShareIcon, fileShareIconName } from '../shapes/file-share.js';
import { flaskIcon, flaskIconName } from '../shapes/flask.js';
import { floppyIcon, floppyIconName } from '../shapes/floppy.js';
import { hardDiskIcon, hardDiskIconName } from '../shapes/hard-disk.js';
import { hardDriveDisksIcon, hardDriveDisksIconName } from '../shapes/hard-drive-disks.js';
import { hardDriveIcon, hardDriveIconName } from '../shapes/hard-drive.js';
import { helixIcon, helixIconName } from '../shapes/helix.js';
import { hostGroupIcon, hostGroupIconName } from '../shapes/host-group.js';
import { hostIcon, hostIconName } from '../shapes/host.js';
import { importIcon, importIconName } from '../shapes/import.js';
import { inductorIcon, inductorIconName } from '../shapes/inductor.js';
import { installIcon, installIconName } from '../shapes/install.js';
import { keyboardIcon, keyboardIconName } from '../shapes/keyboard.js';
import { layersIcon, layersIconName } from '../shapes/layers.js';
import { linkIcon, linkIconName } from '../shapes/link.js';
import { mediaChangerIcon, mediaChangerIconName } from '../shapes/media-changer.js';
import { memoryIcon, memoryIconName } from '../shapes/memory.js';
import { mobileIcon, mobileIconName } from '../shapes/mobile.js';
import { mouseIcon, mouseIconName } from '../shapes/mouse.js';
import { namespaceIcon, namespaceIconName } from '../shapes/namespace.js';
import { networkGlobeIcon, networkGlobeIconName } from '../shapes/network-globe.js';
import { networkSettingsIcon, networkSettingsIconName } from '../shapes/network-settings.js';
import { networkSwitchIcon, networkSwitchIconName } from '../shapes/network-switch.js';
import { noWifiIcon, noWifiIconName } from '../shapes/no-wifi.js';
import { nodeGroupIcon, nodeGroupIconName } from '../shapes/node-group.js';
import { nodeIcon, nodeIconName } from '../shapes/node.js';
import { nodesIcon, nodesIconName } from '../shapes/nodes.js';
import { nvmeIcon, nvmeIconName } from '../shapes/nvme.js';
import { phoneHandsetIcon, phoneHandsetIconName } from '../shapes/phone-handset.js';
import { pluginIcon, pluginIconName } from '../shapes/plugin.js';
import { podIcon, podIconName } from '../shapes/pod.js';
import { processOnVmIcon, processOnVmIconName } from '../shapes/process-on-vm.js';
import { qrCodeIcon, qrCodeIconName } from '../shapes/qr-code.js';
import { rackServerIcon, rackServerIconName } from '../shapes/rack-server.js';
import { radarIcon, radarIconName } from '../shapes/radar.js';
import { resistorIcon, resistorIconName } from '../shapes/resistor.js';
import { resourcePoolIcon, resourcePoolIconName } from '../shapes/resource-pool.js';
import { routerIcon, routerIconName } from '../shapes/router.js';
import { rulerPencilIcon, rulerPencilIconName } from '../shapes/ruler-pencil.js';
import { shieldCheckIcon, shieldCheckIconName } from '../shapes/shield-check.js';
import { shieldXIcon, shieldXIconName } from '../shapes/shield-x.js';
import { shieldIcon, shieldIconName } from '../shapes/shield.js';
import { squidIcon, squidIconName } from '../shapes/squid.js';
import { ssdIcon, ssdIconName } from '../shapes/ssd.js';
import { storageAdapterIcon, storageAdapterIconName } from '../shapes/storage-adapter.js';
import { storageIcon, storageIconName } from '../shapes/storage.js';
import { tabletIcon, tabletIconName } from '../shapes/tablet.js';
import { tapeDriveIcon, tapeDriveIconName } from '../shapes/tape-drive.js';
import { terminalIcon, terminalIconName } from '../shapes/terminal.js';
import { unarchiveIcon, unarchiveIconName } from '../shapes/unarchive.js';
import { uninstallIcon, uninstallIconName } from '../shapes/uninstall.js';
import { unlinkIcon, unlinkIconName } from '../shapes/unlink.js';
import { uploadCloudIcon, uploadCloudIconName } from '../shapes/upload-cloud.js';
import { usbIcon, usbIconName } from '../shapes/usb.js';
import { vmIcon, vmIconName } from '../shapes/vm.js';
import { vmwAppIcon, vmwAppIconName } from '../shapes/vmw-app.js';
import { wifiIcon, wifiIconName } from '../shapes/wifi.js';

export const technologyCollectionIcons: IconShapeTuple[] = [
  administratorIcon,
  animationIcon,
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
  ciCdIcon,
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
  fileShare2Icon,
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
  [fileShareIconName, ['folder-share']],
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

declare module '@clr/core/internal' {
  interface IconRegistrySources {
    [administratorIconName]: string;
    [animationIconName]: string;
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
    [ciCdIconName]: string;
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
    [fileShare2IconName]: string;
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
