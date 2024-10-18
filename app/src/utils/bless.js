import a6_0x231e47 from './logger.js';
import a6_0x2028b2 from '../core/core.js';
import { privateKey } from '../../accounts/accounts.js';
import { RPC } from '../core/network/rpc.js';

class Bless {
  constructor() {
    console.log("SKEL DROP HUNT");
    console.log("SONICLABS ARCADE BOT\nBy: Widiskel");
    console.log("By: Widiskel - Skel Drop hunt (https://t.me/skeldrophunt)");

    // Display account tabs
    this.tabs = [];
    this.currentTabIndex = 0;
    privateKey.forEach((_0x2d2f40, _0x50c922) => {
      const _0x25a191 = this.createAccountTab("Account " + (_0x50c922 + 1));
      this.tabs.push(_0x25a191);
    });

    if (this.tabs.length > 0) {
      console.log(this.tabs[0]); // Display first account info
    }

    console.log("Use '->' (arrow right) and '<-' (arrow left) to switch between tabs.");
  }

  createAccountTab(tabName) {
    return `Account Tab: ${tabName}`;
  }

  renderTabList() {
    let tabList = '';
    privateKey.forEach((_0x86fa1, _0x404676) => {
      if (_0x404676 === this.currentTabIndex) {
        tabList += `* Account ${_0x404676 + 1} `;
      } else {
        tabList += `Account ${_0x404676 + 1} `;
      }
    });
    console.log("Tab List: " + tabList);
  }

  switchTab(_0x151cdf) {
    this.currentTabIndex = _0x151cdf;
    console.log(this.tabs[this.currentTabIndex]);
    this.renderTabList();
  }

  log(status = '', pk = '', accountData = new a6_0x2028b2(), delay) {
    const account = privateKey.find(acc => acc.pk === pk);
    const accountIndex = privateKey.indexOf(account);
    
    if (delay === undefined) {
      a6_0x231e47.info(`Account ${accountIndex + 1} - ${status}`);
      delay = '-';
    }
    
    const address = accountData.address ?? '-';
    const balance = accountData.balance ?? '-';
    const points = accountData.point ?? {};
    const totalPoints = points.totalPoints ?? '-';
    const todayPoints = points.today ?? '-';
    
    const logInfo = `
      Address      : ${address}
      Balance      : ${balance} ${RPC.SYMBOL}
      Points       : Total ${totalPoints} | Today ${todayPoints}
      Status       : ${status}
      Delay        : ${delay}
    `;
    console.log(logInfo);
  }

  info(message = '') {
    console.log(`Info: ${message}`);
  }

  clearInfo() {
    console.clear();
  }
}

export default new Bless();