import React from 'react'
import "./home.css"
import logo from "../../assets/home-navbar-img.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
          <div className="logo-text"><h1>Xisobot</h1><p>Lorem Ipsum is simply dummy text</p></div>
        </div>
        <Link to="/login"><button className='to-login-btn'>Tizimga kirish</button></Link>
        <div className="border"></div>
      </div>
      <div className='home-about'><p>O`zbekiston bo`ylab barcha ta`lim markazlarini avtomatlashtirish dasturi. Xisobot.uz orqalik siz nimalar qila olasiz?
        Dasturimiz orqalik o'quvchilarni kelib ketishlari, ular haqida ma'lumot hamda ustozlarda qancha o'quvchilar borlig,
        barcha fanlar alohida kategoriyalarda joylashganligi, pul mablag`larini kuzatib borish
        va turli xil  qulay imkoniyatlar, barchasi bizda ta'minlangan!</p></div>
      <div className="cards">
        <div className="card"><i class="fa-regular fa-cloud-arrow-down"></i><p>Dasturni o'rnatib, o'rgatish mutlaqo bepul!</p></div>
        <div className="card"><i class="fa-regular fa-file-certificate"></i><p>Litsenziya amal qilishmud datigacha qo'llab quvvatlash!</p></div>
        <div className="card"><i class="fa-light fa-thumbs-up"></i><p>Barcha xizmat vahuquqlar kafolatlangan!</p></div>
      </div>
      <div className="footer">InnaSite - kompaniyasi tomonidan ishlab chiqilgan!</div>
    </div>
  )
}

export default Home