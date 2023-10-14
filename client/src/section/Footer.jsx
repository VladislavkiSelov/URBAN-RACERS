import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='wraper_footer'>
            <footer className='footer container'>
                <div className='footer_tbl_1'>
                    <div className='logo'>
                        <img src="/img/logo.svg" alt="#" />
                        <p>Магазин<br />
                            Автотюинга</p>
                    </div>
                    <div className='social_link'>
                        <a href="#">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.109375 12.9478C0.109375 6.04419 5.70582 0.447754 12.6094 0.447754C19.5129 0.447754 25.1094 6.04419 25.1094 12.9478C25.1094 19.8513 19.5129 25.4478 12.6094 25.4478C5.70582 25.4478 0.109375 19.8513 0.109375 12.9478ZM12.61 6.28109C10.7994 6.28109 10.5722 6.289 9.86108 6.32137C9.15135 6.35387 8.6669 6.46623 8.24301 6.63109C7.80453 6.80137 7.43258 7.02915 7.06203 7.39985C6.69119 7.77041 6.46341 8.14236 6.29257 8.58069C6.12729 9.00473 6.01479 9.48932 5.98285 10.1988C5.95104 10.9099 5.94271 11.1372 5.94271 12.9478C5.94271 14.7584 5.95076 14.9849 5.98299 15.696C6.01563 16.4058 6.12799 16.8902 6.29271 17.3141C6.46313 17.7526 6.69091 18.1245 7.06161 18.4951C7.43203 18.8659 7.80398 19.0943 8.24218 19.2646C8.66635 19.4294 9.15094 19.5418 9.86053 19.5743C10.5716 19.6066 10.7987 19.6146 12.6092 19.6146C14.4199 19.6146 14.6464 19.6066 15.3575 19.5743C16.0673 19.5418 16.5523 19.4294 16.9764 19.2646C17.4148 19.0943 17.7862 18.8659 18.1566 18.4951C18.5274 18.1245 18.7552 17.7526 18.926 17.3143C19.0899 16.8902 19.2024 16.4056 19.2358 15.6962C19.2677 14.9851 19.276 14.7584 19.276 12.9478C19.276 11.1372 19.2677 10.91 19.2358 10.1989C19.2024 9.48918 19.0899 9.00473 18.926 8.58083C18.7552 8.14236 18.5274 7.77041 18.1566 7.39985C17.7857 7.02901 17.4149 6.80123 16.976 6.63109C16.551 6.46623 16.0663 6.35387 15.3566 6.32137C14.6454 6.289 14.419 6.28109 12.6079 6.28109H12.61Z" fill="#4F4F4F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0119 7.48249C12.1894 7.48221 12.3875 7.48249 12.61 7.48249C14.39 7.48249 14.601 7.48888 15.3039 7.52082C15.9539 7.55054 16.3067 7.65916 16.5417 7.75041C16.8528 7.87124 17.0746 8.01569 17.3078 8.24902C17.5412 8.48236 17.6856 8.70458 17.8067 9.0157C17.898 9.25042 18.0067 9.6032 18.0363 10.2532C18.0683 10.956 18.0752 11.1671 18.0752 12.9463C18.0752 14.7255 18.0683 14.9366 18.0363 15.6394C18.0066 16.2894 17.898 16.6422 17.8067 16.8769C17.6859 17.188 17.5412 17.4095 17.3078 17.6427C17.0745 17.8761 16.853 18.0205 16.5417 18.1413C16.307 18.233 15.9539 18.3414 15.3039 18.3711C14.6011 18.403 14.39 18.41 12.61 18.41C10.8298 18.41 10.6189 18.403 9.91608 18.3711C9.26608 18.3411 8.91329 18.2325 8.67815 18.1412C8.36704 18.0204 8.14481 17.8759 7.91148 17.6426C7.67814 17.4093 7.5337 17.1876 7.41258 16.8763C7.32133 16.6416 7.21258 16.2888 7.183 15.6388C7.15105 14.936 7.14466 14.7249 7.14466 12.9446C7.14466 11.1643 7.15105 10.9543 7.183 10.2515C7.21272 9.60154 7.32133 9.24876 7.41258 9.01375C7.53342 8.70264 7.67814 8.48042 7.91148 8.24708C8.14481 8.01374 8.36704 7.8693 8.67815 7.74819C8.91316 7.65652 9.26608 7.54818 9.91608 7.51832C10.5311 7.49054 10.7694 7.48221 12.0119 7.48082V7.48249ZM16.1686 8.58944C15.727 8.58944 15.3686 8.94736 15.3686 9.38917C15.3686 9.83085 15.727 10.1892 16.1686 10.1892C16.6103 10.1892 16.9687 9.83085 16.9687 9.38917C16.9687 8.9475 16.6103 8.58944 16.1686 8.58944ZM12.61 9.52418C10.7193 9.52418 9.18635 11.0571 9.18635 12.9478C9.18635 14.8385 10.7193 16.3708 12.61 16.3708C14.5007 16.3708 16.0331 14.8385 16.0331 12.9478C16.0331 11.0571 14.5007 9.52418 12.61 9.52418Z" fill="#4F4F4F" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.61 10.7256C13.8372 10.7256 14.8322 11.7204 14.8322 12.9478C14.8322 14.1751 13.8372 15.1701 12.61 15.1701C11.3826 15.1701 10.3878 14.1751 10.3878 12.9478C10.3878 11.7204 11.3826 10.7256 12.61 10.7256Z" fill="#4F4F4F" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M25.1094 12.9478C25.1094 19.8513 19.5129 25.4478 12.6094 25.4478C5.70583 25.4478 0.109375 19.8513 0.109375 12.9478C0.109375 6.04421 5.70583 0.447754 12.6094 0.447754C19.5129 0.447754 25.1094 6.04421 25.1094 12.9478ZM8.47995 11.8027C7.22776 12.3494 5.9412 12.9112 4.76471 13.5592C4.1504 14.009 4.96686 14.3272 5.73286 14.6256C5.85464 14.6731 5.9751 14.72 6.08839 14.7669C6.18266 14.7959 6.27849 14.8264 6.37563 14.8573C7.22755 15.1287 8.17745 15.4314 9.00453 14.9761C10.3632 14.1957 11.6453 13.2934 12.9265 12.3918C13.3463 12.0963 13.7659 11.801 14.1881 11.5101C14.2079 11.4974 14.2302 11.483 14.2546 11.4672C14.6142 11.234 15.4231 10.7097 15.1239 11.4322C14.4164 12.2059 13.6585 12.8908 12.8966 13.5795C12.3831 14.0436 11.8677 14.5095 11.3645 15.0053C10.9264 15.3613 10.4713 16.0773 10.962 16.5759C12.0921 17.3671 13.2399 18.1391 14.3871 18.9106C14.7604 19.1617 15.1336 19.4127 15.5061 19.6644C16.1375 20.1684 17.1242 19.7607 17.263 18.973C17.3247 18.6107 17.3867 18.2484 17.4487 17.886C17.7912 15.8836 18.1338 13.8804 18.4365 11.8715C18.4776 11.5563 18.5242 11.2412 18.5709 10.9259C18.684 10.1618 18.7972 9.39676 18.8326 8.62854C18.7414 7.86187 17.8118 8.03046 17.2945 8.20286C14.6356 9.21463 12.0032 10.3014 9.3812 11.4073C9.08417 11.5389 8.78307 11.6704 8.47995 11.8027Z" fill="#4F4F4F" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Combined-Shape" fill-rule="evenodd" clip-rule="evenodd" d="M0.109375 12.9478C0.109375 6.04419 5.70582 0.447754 12.6094 0.447754C19.5129 0.447754 25.1094 6.04419 25.1094 12.9478C25.1094 19.8513 19.5129 25.4478 12.6094 25.4478C5.70582 25.4478 0.109375 19.8513 0.109375 12.9478ZM18.9974 9.86089C18.8441 9.27182 18.3923 8.80796 17.8185 8.65053C16.7788 8.36442 12.6094 8.36442 12.6094 8.36442C12.6094 8.36442 8.43991 8.36442 7.40013 8.65053C6.82642 8.80796 6.3746 9.27182 6.22127 9.86089C5.94271 10.9285 5.94271 13.1561 5.94271 13.1561C5.94271 13.1561 5.94271 15.3836 6.22127 16.4513C6.3746 17.0403 6.82642 17.5042 7.40013 17.6617C8.43991 17.9478 12.6094 17.9478 12.6094 17.9478C12.6094 17.9478 16.7788 17.9478 17.8185 17.6617C18.3923 17.5042 18.8441 17.0403 18.9974 16.4513C19.276 15.3836 19.276 13.1561 19.276 13.1561C19.276 13.1561 19.276 10.9285 18.9974 9.86089Z" fill="#4F4F4F" />
                                <path id="Fill-2" fill-rule="evenodd" clip-rule="evenodd" d="M11.3594 15.4479V11.2812L14.6927 13.3647L11.3594 15.4479Z" fill="#4F4F4F" />
                            </svg>
                        </a>
                    </div>
                    <p>Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi, Skoda, Seat, Skoda, Porsche, BMW, Mercedes-Benz и др.Мы предлагаем только лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым гарантируя отличные цены и сроки доставки.</p>
                </div>
                <div className='footer_tbl_2'>
                    <h3 className='table_contents'>Страницы</h3>
                    <ul>
                        <li>Главная</li>
                        <li>Контакты</li>
                        <li>Каталог</li>
                        <li>Партнеры</li>
                        <li>Актуальное</li>
                        <li>Подбор по автомобилю</li>
                    </ul>
                </div>
                <div className='footer_tbl_3'>
                    <h3 className='table_contents'>Для покупателей</h3>
                    <ul>
                        <li>Доставка</li>
                        <li>Оплата</li>
                        <li>Возврат</li>
                        <li>Партнеры</li>
                        <li>Личный кабинет</li>
                    </ul>
                </div>
                <div className='footer_tbl_4'>
                    <h3 className='table_contents'>Информация</h3>
                    <ul>
                        <li>Статьи</li>
                        <li>Видеообзоры</li>
                        <li>Бренды</li>
                        <li>Установочные центры</li>
                    </ul>
                </div>
                <div className='footer_tbl_5'>
                    <h3 className='table_contents'>Правила</h3>
                    <ul>
                        <li>Куки</li>
                        <li>Правила</li>
                    </ul>
                </div>
                <div className='register_login'>
                    <button type='button' className='login'>Вход</button>
                    <NavLink to="/registration"><button type='button' className='register'>регистрация</button></NavLink>
                    <p>© 2022 UrbanRacers</p>
                </div>
            </footer>
        </div>
    )
}
