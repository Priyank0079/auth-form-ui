import React from 'react';
import '../styles/account-settings.css';

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <div className="account-settings-content">
        <h1 className="account-settings-heading">Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-image-wrapper">
            <div className="profile-placeholder">
              <span>MD</span>
            </div>
            <div className="camera-icon">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 4.66667C5.71146 4.66667 4.66667 5.71146 4.66667 7C4.66667 8.28854 5.71146 9.33333 7 9.33333C8.28854 9.33333 9.33333 8.28854 9.33333 7C9.33333 5.71146 8.28854 4.66667 7 4.66667ZM7 8.16667C6.35567 8.16667 5.83333 7.64433 5.83333 7C5.83333 6.35567 6.35567 5.83333 7 5.83333C7.64433 5.83333 8.16667 6.35567 8.16667 7C8.16667 7.64433 7.64433 8.16667 7 8.16667Z" fill="white"/>
                <path d="M4.66667 2.33333H3.41667C2.98225 2.33333 2.625 2.69058 2.625 3.125V10.875C2.625 11.3094 2.98225 11.6667 3.41667 11.6667H10.5833C11.0178 11.6667 11.375 11.3094 11.375 10.875V3.125C11.375 2.69058 11.0178 2.33333 10.5833 2.33333H9.33333L8.16667 1.16667H5.83333L4.66667 2.33333ZM10.5833 10.875H3.41667V3.125H4.66667L5.83333 2.33333H8.16667L9.33333 3.125H10.5833V10.875Z" fill="white"/>
              </svg>
            </div>
          </div>
          <h2 className="profile-name">Marry Doe</h2>
          <p className="profile-email">Marry@gmail.com</p>
        </div>

        <div className="divider"></div>

        <div className="description-section">
          <p className="description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="divider"></div>
      </div>
    </div>
  );
};

export default AccountSettings;

