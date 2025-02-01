"use client";
import React, { Component } from 'react';
import styles from './Header.module.css';
import Image from "next/image";


export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <header className={styles.header}>
        <div className="logo">
        <Image
          className={styles.logo}
          src="/stackline_logo.svg"
          alt="Stackline logo"
          width={180}
          height={38}
          priority
        />
        </div>
        </header>
      </div>
    );
  }
} 
