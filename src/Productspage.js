import React from 'react'
import Navbarpage from './Navbarpage'
import './App.css'

const Productspage = () => {
    return (
        <>
            <Navbarpage />
            <div className='container'>
                <table class="table table-success table-striped" >
                    <thead>
                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">WebSite</th>
                            <th scope="col">Frontend</th>
                            <th scope="col">Backend</th>
                            <th scope="col">DataBase</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Google</td>
                            <td>TypeScript & JavaSript</td>
                            <td>Node,Java,C++</td>
                            <td>Most Popular for Search engine</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Amazon</td>
                            <td>JavaSript</td>
                            <td>C++,Java,Perl</td>
                            <td>Best e-commerce website and cloudComputing</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Youtube</td>
                            <td>TypeScript & JavaSript</td>
                            <td>C++,Java,Perl,c,Go</td>
                            <td>Popular Vedio sharing Platform</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Wikipedia</td>
                            <td>JavaSript</td>
                            <td>Sql</td>
                            <td>A huge encyclipedia</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>LinkedIn</td>
                            <td>JavaSript</td>
                            <td>Postre Sql</td>
                            <td>Best Proffesional Network</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Yahoo</td>
                            <td>JavaSript</td>
                            <td>Postgre Sql</td>
                            <td>Webservices Provider</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Productspage