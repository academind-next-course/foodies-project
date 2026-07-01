'use client'

import Link from "next/link";

import styles from './NavLinks.module.css'
import { usePathname } from "next/navigation";

export default function NavLink({ children, href }) {
  const path = usePathname()

  const isActive = path === href ? styles.active : ""
  const assignedClass = `${styles.link} ${isActive}`.trim()
  return (
    <Link href={href} className={assignedClass}>
      {children}
    </Link>
  )
}