import React from 'react';
import LanguageExchange from './pages/LanguageExchange';

function App() {
const Language = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">언어 교류</h1>
      <img src={languageImg} alt="언어 교류" className="mx-auto mb-6 rounded-2xl shadow-lg w-[25cm] h-[15cm] object-cover"/>
      <h1>환영합니다!</h1>
      <h2>언어교류 프로그램</h2>
      <LanguageExchange />
      <table border="1" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
          <tr>
            <th>주차</th>
            <th>영어 주제 (English)</th>
            <th>한국어 주제</th>
            <th>튀르키예어 주제 (Türkçe)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1주차</td><td>Tell us who you are</td><td>나를 소개해요</td><td>Kendini tanıt</td></tr>
          <tr><td>2주차</td><td>Discover great ideas</td><td>좋은 아이디어란?</td><td>Harika fikirleri keşfet</td></tr>
          <tr><td>3주차</td><td>Learn the art of feedback</td><td>피드백의 기술</td><td>Geri bildirim sanatını öğren</td></tr>
          <tr><td>4주차</td><td>Identify your ideas</td><td>내 아이디어 찾기</td><td>Fikirlerini belirle</td></tr>
          <tr><td>5주차</td><td>Build your throughline</td><td>이야기 중심축 세우기</td><td>Hikayenin ana temasını kur</td></tr>
          <tr><td>6주차</td><td>Plan your talk arc</td><td>이야기 구성 설계</td><td>Konuşmanın yapısını planla</td></tr>
          <tr><td>7주차</td><td>Research and support your idea</td><td>아이디어 뒷받침 자료 조사</td><td>Fikrini araştır ve destekle</td></tr>
          <tr><td>8주차</td><td>Write your script</td><td>발표 대본 작성</td><td>Konuşma metnini yaz</td></tr>
          <tr><td>9주차</td><td>Make it visual</td><td>시각자료 만들기</td><td>Görsel materyal hazırla</td></tr>
          <tr><td>10주차</td><td>Say your talk out loud</td><td>발표 연습</td><td>Konuşmanı yüksek sesle söyle</td></tr>
          <tr><td>11주차</td><td>Practice, edit, practice</td><td>발표 다듬기 및 연습</td><td>Pratik yap, düzenle, tekrar et</td></tr>
          <tr><td>12주차</td><td>Present your final rehearsal</td><td>최종 리허설</td><td>Son provasını sun</td></tr>
        </tbody>
      </table>
    </div>
  );
};


export default function LanguageEducation() {