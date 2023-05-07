import "./Page.css";
import arrowRight1 from './icons/arrow-right-1.svg';
import arrowRight3 from './icons/arrow-right-3.svg';
import arrowRight31 from './icons/arrow-right-31.svg';
import calendar from './icons/calendar.svg';
import chevrondown from './icons/chevrondown.svg';
import profilePicture from './icons/profile-picture.png';
import iconDashboard from './icons/icon-dashboard.svg';
import iconGraph from './icons/icon-graph.svg';
import iconSearch from './icons/icon-search.svg';
import walletIcon from './icons/walletIcon.svg';
import transactionIcon from './icons/transaction-icon.svg';
import notif from './icons/notif.svg'
import notification from './icons/notification.svg';
import pwd from './icons/password.svg';
import security from './icons/security.svg'
import profile from './icons/profile.svg';
import setting from './icons/setting.svg';
import dataPrivacy from './icons/data-privacy.svg';
import directDebits from './icons/direct-debits.svg';

export const Page = () => {
  return (
    <div className="page">
      <div className="bg" />
      <div className="bg1" />
      <div className="bg2" />
      <div className="top">
        <div className="setting">Setting</div>
        <div className="notifications">
          <img className="notification-icon" alt="" src={notification} />
          <div className="notif-parent">
            <img className="notif-icon" alt="" src={notif} />
            <div className="div">8</div>
          </div>
        </div>
        <div className="user">
          <div className="user-inner">
            <img className="frame-child" alt="" src={profilePicture} />
          </div>
          <img className="chevron-down-icon" alt="" src={chevrondown} />
        </div>
        <div className="input-field">
          <div className="icon-search-parent">
            <img className="icon-search" alt="" src={iconSearch} />
            <div className="label">
              <div className="small-label-regular-12px">Search...</div>
            </div>
          </div>
        </div>
      </div>
      <div className="personal-info">
        <div className="personal-info1">
          <div className="personal-information">Personal Info</div>
          <div className="edit-profile">
            <img className="profile-icon" alt="" src={profile} />
            <div className="personal-information1">Edit Profile</div>
            <img className="arrow-right-2" alt="" src={arrowRight1} />
          </div>
          <img className="personal-info-child" alt="" src="/vector-15.svg" />
          <div className="edit-profile">
            <div className="personal-information1">Password</div>
            <img className="arrow-right-2" alt="" src={arrowRight1}/>
            <img className="profile-icon" alt="" src={pwd} />
          </div>
        </div>
        <div className="personal-information-parent">
          <div className="personal-information">General</div>
          <div className="direct-debits2">
            <div className="personal-information1">Direct Debits</div>
            <img className="arrow-right-2" alt="" src={arrowRight1} />
            <img className="profile-icon" alt="" src={directDebits} />
          </div>
          <img className="personal-info-child" alt="" src="/vector-15.svg" />
          <div className="edit-profile">
            <div className="personal-information1">Scheduled Transfer</div>
            <div className="direct-debits6">Scheduled Transfer</div>
            <img className="arrow-right-2" alt="" src={arrowRight1} />
            <img className="profile-icon" alt="" src={calendar} />
          </div>
          <img className="personal-info-child" alt="" src="/vector-15.svg" />
          <div className="edit-profile">
            <div className="personal-information1">Data Privacy</div>
            <img className="arrow-right-2" alt="" src={arrowRight1} />
            <img className="shield-done-icon" alt="" src={dataPrivacy} />
          </div>
        </div>
      </div>
      <div className="upgrade-to-pro">
        <div className="bg3" />
        <img className="patern-icon" alt="" src="/patern.svg" />
        <div className="description">
          <div className="upgrade-to-pro1">Upgrade to PRO</div>
          <div className="courses">{`Get your pro feature by Subscribe FinPro and easy to manage your financial `}</div>
        </div>
        <div className="button">
          <div className="label1">
            <div className="medium-label-medium-14px">Upgrade</div>
          </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="bg4" />
        <img className="side-bar-child" alt="" src="/vector-14.svg" />
        <div className="manage">MANAGE</div>
        <div className="other">OTHER</div>
        <div className="dashboard-menu">
          <div className="indikator" />
          <div className="dashboard">
            <img className="icon-dashboard" alt="" src={iconDashboard} />
            <div className="transaction">Dashboard</div>
          </div>
        </div>
        <div className="dashboard-menu1">
          <div className="indikator" />
          <div className="iconlyboldwallet-parent">
            <img
              className="iconlyboldwallet"
              alt=""
              src={transactionIcon}
            />
            <div className="transaction">Transaction</div>
          </div>
        </div>
        <div className="dashboard-menu2">
          <div className="indikator" />
          <div className="iconlyboldwallet-parent">
            <img
              className="iconlyboldwallet"
              alt=""
              src={walletIcon}
            />
            <div className="transaction">My Wallet</div>
          </div>
        </div>
        <div className="dashboard-menu3">
          <div className="indikator" />
          <div className="iconlyboldwallet-parent">
            <img className="icon-dashboard" alt="" src={iconGraph} />
            <div className="transaction">Analytics</div>
          </div>
        </div>
        <div className="dashboard-menu4">
          <div className="indikator4" />
          <div className="iconlyboldwallet-parent">
            <img className="icon-dashboard" alt="" src={setting} />
            <div className="transaction">Setting</div>
          </div>
        </div>
        <div className="dashboard-menu5">
          <div className="indikator" />
          <div className="iconlyboldwallet-parent">
            <div className="toggle">
              <div className="toggle-child" />
            </div>
            <div className="transaction">Theme</div>
          </div>
        </div>
        <div className="dashboard-menu6">
          <div className="indikator" />
          <div className="iconlyboldwallet-parent">
            <img className="icon-dashboard" alt="" src={security} />
            <div className="transaction">Security</div>
          </div>
        </div>
        <div className="logo">
          <b className="finpro">
            <span>Fin</span>
            <span className="dash">Dash</span>
          </b>
        </div>
      </div>
      <div className="data-privacy">
        <div className="data-privacy1">Data Privacy</div>
        <div className="privacy-1">
          <div className="privacy-11">
            <div className="small-label-regular-12px2">
              What is personal data at FINDASH
            </div>
            <img className="arrow-right-3" alt="" src={arrowRight3} />
          </div>
        </div>
        <div className="privacy-2">
          <div className="small-label-regular-12px-parent">
            <div className="small-label-regular-12px4">
              Your Privacy Rights at FINDASH
            </div>
            <img className="arrow-right-31" alt="" src={arrowRight3} />
          </div>
        </div>
        <div className="privacy-3">
          <div className="type16-parent">
            <div className="type16">{`In addition to this Privacy Policy, we provide data and privacy information embedded in our products and certain features that ask to use your personal information. This product-specific information is accompanied by our Data & Privacy Icon.`}</div>
            <div className="small-label-regular-12px-group">
              <div className="small-label-regular-12px4">
                Personal Data FINDASH collects from you
              </div>
              <img
                className="arrow-right-31"
                alt=""
                src={arrowRight31}
              />
            </div>
          </div>
        </div>
        <div className="privacy-4">
          <div className="small-label-regular-12px-parent">
            <div className="small-label-regular-12px4">
              Personal Data FINDASH Receives from other sources
            </div>
            <img className="arrow-right-31" alt="" src={arrowRight3} />
          </div>
        </div>
        <div className="privacy-5">
          <div className="small-label-regular-12px-parent">
            <div className="small-label-regular-12px4">
              FINDASH's use of personal Data
            </div>
            <img className="arrow-right-31" alt="" src={arrowRight3} />
          </div>
        </div>
        <div className="privacy-6">
          <div className="small-label-regular-12px-parent">
            <div className="small-label-regular-12px4">
              FINDASH's sharing of personal data
            </div>
            <img className="arrow-right-31" alt="" src={arrowRight3} />
          </div>
        </div>
        <div className="privacy-7">
          <div className="small-label-regular-12px-parent2">
            <div className="small-label-regular-12px4">
              Protection of personal data at FINDASH
            </div>
            <img className="arrow-right-36" alt="" src={arrowRight3} />
          </div>
        </div>
      </div>
    </div>
  );
};