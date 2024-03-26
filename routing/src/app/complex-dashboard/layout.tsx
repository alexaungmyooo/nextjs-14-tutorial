import { log } from "console";
import React from "react";

function DashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
        children: React.ReactNode;
        users: React.ReactNode;
        revenue: React.ReactNode;
    notifications: React.ReactNode;
    login: React.ReactNode;
  }) {
  const isLoggedIn = false;
  return isLoggedIn ? (
    <>
          <div> {children}</div>
          <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>{users}</div>
                  <div>{revenue}</div>
              </div>
              <div style={{display: "flex", flex: 1}}>{notifications}</div>
          </div>
    </>
  ): (login);
}

export default DashboardLayout;