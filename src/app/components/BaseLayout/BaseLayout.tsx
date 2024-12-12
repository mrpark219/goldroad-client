'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

function BasicLayout({ children }: Props) {
  return (
    <div className="w-full desktop:w-[480px] min-h-dvh">
      <main>{children}</main>
    </div>
  );
}

export default BasicLayout;
