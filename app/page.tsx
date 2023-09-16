'use client'

import Image from 'next/image';
import styles from './page.module.css';
import Button from './components/button/Button'

import CheckBox from './components/checkBox/CheckBox';

export default function Home() {
  return (
  
      <main>
    <div>
    <Button mode='outline' title="რეგისტრაცია"/>
    <CheckBox/>
    </div>
      </main>
      
      
  
  )
}
