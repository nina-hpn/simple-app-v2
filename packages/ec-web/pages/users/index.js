import React from 'react'
import SideNav from '../../components/SideNav';
import Link from 'next/link';

export default function UserProfile(props) {
    return (
        <div className='body-container'>
            <div className='content-container'>
            <div></div>
            <div className='side-nav'>
                <div className='ava-name-card'>
                    <div className='ava-box'>
                        <img className='ava' src={props.user ? `http://localhost:1337`+ props.user.profile.avatar.url : '../../LamThanhTin_image.png'}  width='50px' height='50px'></img>
                    </div>
                    <div className='name-tag'>
                        { props.user ? props.user.profile.name : "Lâm Thành Tín"}
                    </div>
                </div>
                <div className='nav'> 
                    <SideNav></SideNav>
                    <div className='logoutbtn'>
                        <button className='btn' type='button'>Đăng xuất</button>
                    </div>
                </div>
            </div>
            <div className='main-body'>
                <div className='profile'>
                    <form className='form'>
                    <div className='profile-title'>Thông tin cá nhân</div>
                        <div className='form-group'>
                            <label for='name'>Họ và tên</label>
                            <input className='form-control' type='text' placeholder='Lâm Thành Tín' defaultValue={props.user ? props.user.profile.name : 'Lâm Thành Tín'}></input>
                        </div>
                        <div className='form-group'>
                            <label for='phone'>Số điện thoại</label>
                            <input className='form-control' type='text' placeholder='0363638292' defaultValue={props.user ? props.user.profile.phone : '0352024820'}></input>
                        </div>
                        <div className='form-group'>
                            <label for='birthday'>Ngày sinh</label>
                            <input className='form-control' type='date'></input>
                        </div>
                        <div className='form-group'>
                            <label for='sex'>Giới tính</label>
                            <select className='form-control' id='sex'>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label for='occupations'>Công việc</label>
                            <input type='text' className='form-control' id='occupations'></input>
                        </div>
                        <div className='form-group'>
                            <label for='certificates'>Bằng cấp</label>
                            <textarea className='form-control' id='certificates'></textarea>
                        </div>
                        <div className='form-group'>
                            <label for='skills'>Kỹ năng</label>
                            <textarea className='form-control' id='skills'></textarea>
                        </div>
                        
                        <div className='form-group'>
                            <label for='interests'>Sở thích</label>
                            <textarea className='form-control' id='interests'></textarea>
                        </div>
                        <div className='form-group'>
                            <label for='interests'>Giới thiệu</label>
                            <textarea className='form-control' id='interests'></textarea>
                        </div>
                        <div className='form-group'>
                            <label for='avatar'>Ảnh đại diện</label>
                            <input className='form-control-file' type='file' id='avatar'></input>
                        </div>
                        <div className='form-group'>
                            <button className='btn btn-outline-danger' type='button'>Lưu</button>
                        </div>
                    </form>
                    <div className='profile-details'>
                        <div className='bold'>Tên tài khoản:</div> { 
                            props.user ? props.user.username : 'lamthanhtin'
                        }
                        <br></br>
                        <div className='bold'>Email: </div>{props.user ? props.user.email : '19521400@gm.uit.edu.vn'}
                    </div>
                </div>
                <div className='change-pass-form'>
                    <div className='pass-title'>Đổi mật khẩu</div>
                    <div className='form-group'>
                        <label>Nhập lại mật khẩu cũ</label>
                        <input className='form-control' type='password'></input>
                    </div>
                    <div className='form-group'>
                        <label>Nhập mật khẩu mới</label>
                        <input className='form-control' type='password'></input>
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-secondary' type='button'>Đổi mật khẩu</button>
                    </div>
                </div>
            </div>
            
            </div>
            <style jsx>
                {`
                .bold{
                    font-size: 1.2rem;
                    font-weigth: 700;
                }
                .body-container{
                    width: 100%;
                    height: auto;
                    margin-top: 5%;
                    margin-bottom: 5%;
                    .content-container{
                        margin-right: auto;
                        margin-left: auto;
                        items-align:center;
                        padding: 0px 2%;
                        display: grid;
                        grid-template-columns: .1fr .3fr 1fr .1fr;
                        .side-nav{
                            width: 95%;
                            height: 100%;
                            position: relative;
                            
                            background-color: white;
                            border: 1px solid grey;
                            border-radius: 10px;
                            .ava-name-card{
                                display: block;
                                margin: 5% 10%;

                                .name-tag{
                                    font-size: 1.5rem;
                                    font-weight: 400;
                                    display: inline;
                                }
                                img.ava{
                                    display: inline;
                                    border-radius: 50%;
                                    margin: 7% 2%;

                                }
                            }
                            .nav{
                                
                                width: 100%;
                                margin-top: 20%;
                                .logoutbtn{
                                    margin-right: auto;
                                    margin-left: auto;
                                    margin-top: 40%;
                                    button{
                                        padding: 5% 5%;
                                        border-raidus: 10px;
                                        background-color: var(--main-color);
                                        color: white;
                                        font-size: 1rem;
                                        font-weight: 700;
                                    }
                                }
                            }
                        }
                        .change-pass-form{
                            border: 1px solid grey;
                            border-radius: 10px;
                            margin-top: 3%;
                            padding: 3%;
                            background-color: black;
                            .pass-title{
                                font-size: 3rem;
                                padding-bottom: 1.5rem;
                            }
                            .form-group{
                                label, button{
                                    margin: 2% 0px;
                                }
                            }
                        }
                        .main-body{
                            width: 100%;
                            position: relative;
                            .profile{
                                display: grid;
                                border: 1px solid grey;
                                border-radius: 10px;
                                background-color: white;
                                padding: 3%;
                                
                                grid-template-columns: 1fr .3fr;
                                > div{
                                    margin: 0px 2%;
                                }
                                .form{
                                    margin: 0px 3%;
                                    
                                }
                            }
                            .profile-title{
                                color: var(--main-color);
                                font-size: 3rem;
                                padding-bottom: 1.5rem;
                            }
                            .form-group{
                                margin: 2% 0px;
                            }
                            .form{
                                label, button{
                                    margin: 3% 0px;
                                }
                            }
                        }
                    }
                }
                `}

            </style>
        </div>
    )
}
