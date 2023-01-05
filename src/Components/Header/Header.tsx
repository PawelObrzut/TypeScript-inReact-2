import React from 'react'

interface HeaderProps {
  title: string
}

const Header = ({title}: HeaderProps) => {
  return (
    <header className="headerTitle">
      <h1>{title}</h1>
    </header>
  )
}

export default Header