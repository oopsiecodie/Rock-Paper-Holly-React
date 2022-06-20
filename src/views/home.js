import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import PortofolioCard from '../components/portofolio-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rock Paper Holly</title>
        <meta property="og:title" content="Rock Paper Holly" />
      </Helmet>
      <Navigation></Navigation>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text heading1">
                <span>
                  From the viewers of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </h1>
              <span className="home-text002">
                <span>
                  The boys, MODOK, Uncharted &amp; at least 69 other cultural
                  centerpieces
                </span>
              </span>
              <button className="home-primary button-primary button-lg button">
                Comes one of the biggest, baddest, most ambitious crossover NFT
                movie project
              </button>
            </div>
            <div className="home-gallery">
              <div className="home-container01">
                <img
                  alt="image"
                  src="/playground_assets/wcincf1ov2d6m3p7bbzkzqfoiib1-1000w.jpg"
                  className="home-image"
                />
                <img
                  alt="image"
                  src="/playground_assets/367e835f94c22998dfc1e291187937c91-1500w.jpg"
                  className="home-image001"
                />
                <img
                  alt="image"
                  src="/playground_assets/1269310-v-9bea143faf9b1-1000w.webp"
                  className="home-image002"
                />
                <img
                  alt="image"
                  src="/playground_assets/352606-v1-1000w.webp"
                  className="home-image003"
                />
                <img
                  alt="image"
                  src="/playground_assets/osjnr64cnyghczdlg6oht3a6vna1-1000w.jpg"
                  className="home-image004"
                />
                <img
                  alt="image"
                  src="/playground_assets/7rvvwbvg0cunzyigehts0lrucs81-1000w.jpg"
                  className="home-image005"
                />
                <img
                  alt="image"
                  src="/playground_assets/bec6e0bcb8e7a50fb4bb220e9da2fc901-1000w.jpg"
                  className="home-image006"
                />
                <img
                  alt="image"
                  src="/playground_assets/96db73967121f5de4f9099950fa6d87a1-1000w.jpg"
                  className="home-image007"
                />
                <img
                  alt="image"
                  src="/playground_assets/1342aeb308500c55391eaa146ac51d141-1000w.jpg"
                  className="home-image008"
                />
                <img
                  alt="image"
                  src="/playground_assets/33bc6952f45f7a6ac0e9318fcd86217f1-1000w.jpg"
                  className="home-image009"
                />
                <img
                  alt="image"
                  src="/playground_assets/cb370034045bc8027d9e9c12bab481141-1000w.jpg"
                  className="home-image010"
                />
                <img
                  alt="image"
                  src="/playground_assets/5bdc82a8af29483b3f32fc71a62ad1e71-1000w.jpg"
                  className="home-image011"
                />
                <img
                  alt="image"
                  src="/playground_assets/8b9d4e40183343e62c2d57691e887f8a1-1000w.jpg"
                  className="home-image012"
                />
                <img
                  alt="image"
                  src="/playground_assets/download%20%5B64%5D1-1000w.jpg"
                  className="home-image013"
                />
                <img
                  alt="image"
                  src="/playground_assets/858bded1d57fc39e60712d828d137fad%20%5B2%5D1-1000w.jpg"
                  className="home-image014"
                />
                <img
                  alt="image"
                  src="/playground_assets/3be7dcd7789ff2bdb24fbaf12ccc92591-1000w.jpg"
                  className="home-image015"
                />
                <img
                  alt="image"
                  src="/playground_assets/ed67286f1cdbbdb57b4644f4238600bd1-1000w.jpg"
                  className="home-image016"
                />
                <img
                  alt="image"
                  src="/playground_assets/3f49ae2e21e23c5c157209035a9cbcb01-1000w.jpg"
                  className="home-image017"
                />
                <img
                  alt="image"
                  src="/playground_assets/b8307cf4f33883aa058f8881a388ab211-1000w.jpg"
                  className="home-image018"
                />
                <img
                  alt="image"
                  src="/playground_assets/81b06893e5660184d80231222f3c910e1-300h.jpg"
                  className="home-image019"
                />
                <img
                  alt="image"
                  src="/playground_assets/72636882d9caf4abfe349e2a55b90ad61-1000w.jpg"
                  className="home-image020"
                />
                <img
                  alt="image"
                  src="/playground_assets/043fc536d0b43e221748b2d22e3d9d1a1-1000w.jpg"
                  className="home-image021"
                />
                <img
                  alt="image"
                  src="/playground_assets/3639239cee1c3f2854e47dd0c9b0ace61-1000w.jpg"
                  className="home-image022"
                />
              </div>
              <div className="home-container02">
                <img
                  alt="image"
                  src="/playground_assets/download%20%5B37%5D1-1000w.jpg"
                  className="home-image023"
                />
                <img
                  alt="image"
                  src="/playground_assets/36517-v1-1000w.webp"
                  className="home-image024"
                />
                <img
                  alt="image"
                  src="/playground_assets/cb35dd007eedacdc2d91acaf0177e9351-1000w.jpg"
                  className="home-image025"
                />
                <img
                  alt="image"
                  src="/playground_assets/fq7ci5zmmhzlhuybfkgk9w4hwls1-1000w.jpg"
                  className="home-image026"
                />
                <img
                  alt="image"
                  src="/playground_assets/bmxcao0tz79xn40swjaeijprnc11-1000w.jpg"
                  className="home-image027"
                />
                <img
                  alt="image"
                  src="/playground_assets/3db7223984b1330cd6dcfd4524764f2a1-1000w.jpg"
                  className="home-image028"
                />
                <img
                  alt="image"
                  src="/playground_assets/48ab77e421f84ddccb24c986ff060a761-1500w.jpg"
                  className="home-image029"
                />
                <img
                  alt="image"
                  src="/playground_assets/9c87e1c5da413137c879d8b7c3fb25eb1-1000w.jpg"
                  className="home-image030"
                />
                <img
                  alt="image"
                  src="/playground_assets/7db6bbf67d23f8afe29d67a478bc5f4d1-1000w.jpg"
                  className="home-image031"
                />
                <img
                  alt="image"
                  src="/playground_assets/497d1a0e3ef2ca80fa9bc7513e44d8681-1000w.jpg"
                  className="home-image032"
                />
                <img
                  alt="image"
                  src="/playground_assets/29bf62dfb927512b7bf037c0d976bf2e1-1000w.jpg"
                  className="home-image033"
                />
                <img
                  alt="image"
                  src="/playground_assets/734306438b75df6d040b58ce8064f2501-1000w.jpg"
                  className="home-image034"
                />
                <img
                  alt="image"
                  src="/playground_assets/2bf05035b7f5fbff11cd035c6640ec2b1-1000w.jpg"
                  className="home-image035"
                />
                <img
                  alt="image"
                  src="/playground_assets/9c570b01885e31ac300c1eb7a622f1131-1000w.jpg"
                  className="home-image036"
                />
                <img
                  alt="image"
                  src="/playground_assets/8d5869a348835f2c9dec52e38ab865671-1000w.jpg"
                  className="home-image037"
                />
                <img
                  alt="image"
                  src="/playground_assets/e410e41fdea89d461492e23548476abc1-1000w.jpg"
                  className="home-image038"
                />
                <img
                  alt="image"
                  src="/playground_assets/0b79ae2386ed000ef24471ef360618c41-1000w.jpg"
                  className="home-image039"
                />
                <img
                  alt="image"
                  src="/playground_assets/555c12adddb276ff2a39dfcd7c6091e61-300h.jpg"
                  className="home-image040"
                />
                <img
                  alt="image"
                  src="/playground_assets/65cd2c12ab152a94a63a35e1622760911-1000w.jpg"
                  className="home-image041"
                />
                <img
                  alt="image"
                  src="/playground_assets/e18f60132e8b4b55ed58dc3b3afc0a9a1-1000w.jpg"
                  className="home-image042"
                />
                <img
                  alt="image"
                  src="/playground_assets/9e3e68b4c47866fe5e6cb10c9ec758181-1000w.jpg"
                  className="home-image043"
                />
                <img
                  alt="image"
                  src="/playground_assets/2849bd1e54febc82c6f38ca520fe00441-1000w.jpg"
                  className="home-image044"
                />
              </div>
              <div className="home-container03">
                <div className="home-container04">
                  <img
                    alt="image"
                    src="/playground_assets/lrqijxetkcnvvurhmglnvmxrzox1-300h.jpg"
                    className="home-image045"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/07ee1d0becc43df040a6c8e500c8f249%20%5B2%5D1-300h.jpg"
                    className="home-image046"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/1b38bad49c555d94ed6e308a3f597d5a1-300h.jpg"
                    className="home-image047"
                  />
                </div>
                <div className="home-container05">
                  <img
                    alt="image"
                    src="/playground_assets/nemzh82stu91d3iqvldnqfqppyl1-1000w.jpg"
                    className="home-image048"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/pthyqovxqrw2m0s9x82twj48jq4%20%5B1%5D1-1000w.jpg"
                    className="home-image049"
                  />
                </div>
                <img
                  alt="image"
                  src="/playground_assets/a61c0550b4b3216bf48b9a9ff191bfd8%20%5B1%5D1-1500w.jpg"
                  className="home-image050"
                />
                <div className="home-container06">
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B36%5D1-300h.jpg"
                    className="home-image051"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/dd74f7c35789af490f761d5c36d21b631-300h.jpg"
                    className="home-image052"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/fvbescmxwaalgjz1-300h.jpg"
                    className="home-image053"
                  />
                </div>
                <div className="home-container07">
                  <img
                    alt="image"
                    src="/playground_assets/miha8xf6wmxbs83ia4vq5ojvxv81-300h.jpg"
                    className="home-image054"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/l6qqu6q3k4mmpojncnbt43fstl1-300h.jpg"
                    className="home-image055"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/h9gjikuuj650dte0gyzld3ilcih1-300h.jpg"
                    className="home-image056"
                  />
                </div>
                <div className="home-container08">
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B54%5D1-200w.jpg"
                    className="home-image057"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/qwogfcg6yus55nuwekgujhe54wy1-300h.jpg"
                    className="home-image058"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/52f571f2a68765b5c92536419c079fda1-300h.jpg"
                    className="home-image059"
                  />
                </div>
                <div className="home-container09">
                  <img
                    alt="image"
                    src="/playground_assets/n9sicwnongwbwe75le27suhclmm1-300h.jpg"
                    className="home-image060"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B55%5D1-300h.jpg"
                    className="home-image061"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B56%5D1-300h.jpg"
                    className="home-image062"
                  />
                </div>
                <div className="home-container10">
                  <img
                    alt="image"
                    src="/playground_assets/7dyuv2g0hleqheuedfoqhz2dvut1-300h.jpg"
                    className="home-image063"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/793feb862c31f259f6d7061f8f4fe4c31-300h.jpg"
                    className="home-image064"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/7qop80yfuo0bwja1uxk1dxuuewv1-200w.jpg"
                    className="home-image065"
                  />
                </div>
                <div className="home-container11">
                  <img
                    alt="image"
                    src="/playground_assets/c0cb79f2c4cf68c2e71f15fe89bea86b1-300h.jpg"
                    className="home-image066"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/d76490dba9831502963013285425627e1-300h.jpg"
                    className="home-image067"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/175956f74a1490c57ac31647c9be6776%20%5B1%5D1-300h.jpg"
                    className="home-image068"
                  />
                </div>
                <div className="home-container12">
                  <img
                    alt="image"
                    src="/playground_assets/5dcf6dc6012e9f583c8fefac8f737eba1-300h.jpg"
                    className="home-image069"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/5a1175d5cb06d67b178f9365dd09d94e1-300h.jpg"
                    className="home-image070"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/6d66dd3d7ff0666aad436f303c65492b1-300h.jpg"
                    className="home-image071"
                  />
                </div>
                <div className="home-container13">
                  <img
                    alt="image"
                    src="/playground_assets/051c0baf65b0d4278aa7feb17cf81f39%20%5B1%5D1-300h.jpg"
                    className="home-image072"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/956c2d901d2b06bea80e4d9b2d6731201-300h.jpg"
                    className="home-image073"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/3e6c0bb1ab59abf586fc3e2ddd3b79361-300h.jpg"
                    className="home-image074"
                  />
                </div>
                <div className="home-container14">
                  <img
                    alt="image"
                    src="/playground_assets/44c90e2edefa971ed8b75d02ffccce0f1-300h.jpg"
                    className="home-image075"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/e56fac68a871cf787db740d4d30726031-300h.jpg"
                    className="home-image076"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/80d823886952bdadf4846908b89b97381-300h.jpg"
                    className="home-image077"
                  />
                </div>
                <div className="home-container15">
                  <img
                    alt="image"
                    src="/playground_assets/85d2df81a6e4c4cf7657111916497fbf1-300h.jpg"
                    className="home-image078"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/7944bb8963ae8a9b6625c740eba9fc281-300h.jpg"
                    className="home-image079"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/a94e5953547c35f3f2a27ef357afb8581-300h.jpg"
                    className="home-image080"
                  />
                </div>
                <div className="home-container16">
                  <img
                    alt="image"
                    src="/playground_assets/5c2a18f3394bfe9d075dc8275fc8ab391-300h.jpg"
                    className="home-image081"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B62%5D1-200w.jpg"
                    className="home-image082"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/d3331a97ca0d332891576bb71b7a0e201-300h.jpg"
                    className="home-image083"
                  />
                </div>
                <div className="home-container17">
                  <img
                    alt="image"
                    src="/playground_assets/c3a750d74527a983f729e303e5fa025c1-300h.jpg"
                    className="home-image084"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/8cd57cec96693ea46cc59f364ad3c1f71-300h.jpg"
                    className="home-image085"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/769764d085c19f27d4c844edce07a5271-300h.jpg"
                    className="home-image086"
                  />
                </div>
                <div className="home-container18">
                  <img
                    alt="image"
                    src="/playground_assets/f4b7a46dbeb18c32a67cd1073e109b271-300h.jpg"
                    className="home-image087"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/32a2656f47f4593fc66692687f0129261-300h.jpg"
                    className="home-image088"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/3ed20afd5b521da5b79241b7c6dda3a61-300h.jpg"
                    className="home-image089"
                  />
                </div>
                <div className="home-container19">
                  <img
                    alt="image"
                    src="/playground_assets/b08ebcb129c995f2d8488def0f9aa9e21-300h.jpg"
                    className="home-image090"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/b521e3da5c760658d1e7830d36e611841-300h.jpg"
                    className="home-image091"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/b80d2425aa5ef350a217d1fd08917271%20%5B2%5D1-300h.jpg"
                    className="home-image092"
                  />
                </div>
                <div className="home-container20">
                  <img
                    alt="image"
                    src="/playground_assets/74bfebd55a1b8591d58fad0552198d201-300h.jpg"
                    className="home-image093"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/3f2606ab75717cf8519b2b870871e5361-300h.jpg"
                    className="home-image094"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/1763916b112f3134955b88359ccbe7d71-300h.jpg"
                    className="home-image095"
                  />
                </div>
                <div className="home-container21">
                  <img
                    alt="image"
                    src="/playground_assets/f99c55b369a6dc1e047f32c9ba938cd91-300h.jpg"
                    className="home-image096"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/7363752388b4136fb10b0a4a7dbd037e1-300h.jpg"
                    className="home-image097"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/c8f83e802d0ff198ba3b9c0b8d220d201-300h.jpg"
                    className="home-image098"
                  />
                </div>
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/playground_assets/49c6823d5a26a0e369676eebf21878001-300h.jpg"
                    className="home-image099"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/4edadd803dc88c6486a19918df39eba51-300h.jpg"
                    className="home-image100"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/89ffa4dd9a7e11634ca0bc2f33aacf171-300h.jpg"
                    className="home-image101"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/playground_assets/00af38dd8a2c9e867032349b17edf6531-300h.jpg"
                    className="home-image102"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/82ad3adf8b0f4bcfdfb97f7aebcd8cdf%20%5B1%5D1-300h.jpg"
                    className="home-image103"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/download%20%5B65%5D1-300h.jpg"
                    className="home-image104"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/playground_assets/3c8d1728afc47404db2ae4c004b762161-300h.jpg"
                    className="home-image105"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/a10542ae0f74e69e0a1feffd609e71511-300h.jpg"
                    className="home-image106"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/bd53e7394cb602d46605da0b37831b5f%20%5B1%5D1-300h.jpg"
                    className="home-image107"
                  />
                </div>
                <div className="home-container25">
                  <img
                    alt="image"
                    src="/playground_assets/5f9b761b5295166059d7fff9a7880432%20%5B1%5D1-300h.jpg"
                    className="home-image108"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/bbe9e8d70a28832e5a6d8e4dab3770251-300h.jpg"
                    className="home-image109"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/1f95eb0de9f2fe2db1d6ebe40f3439ef1-300h.jpg"
                    className="home-image110"
                  />
                </div>
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/playground_assets/1b147e5a934845cc23fd1d49a544cd0c1-300h.jpg"
                    className="home-image111"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/0a261176c1f6ce1544ba481adaf07e161-300h.jpg"
                    className="home-image112"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/533178bda9b6963c45f5a4a5c05106581-300h.jpg"
                    className="home-image113"
                  />
                </div>
                <div className="home-container27">
                  <img
                    alt="image"
                    src="/playground_assets/38d6fe904dc13c17b35bc6ab6f4a45fa1-300h.jpg"
                    className="home-image114"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/4b1cd4de582fdc8c57b808f39f82867f1-300h.jpg"
                    className="home-image115"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/27dfb9a961a33c2429796bf47c605dfa1-300h.jpg"
                    className="home-image116"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/playground_assets/c34ccd04e48c6c534ad4993b76db59111-300h.jpg"
                    className="home-image117"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/f5c4e9f74559414bfff63f5e97be477d1-300h.jpg"
                    className="home-image118"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/a0ddad29ce8bd2cc1130ae0336dfe5f31-300h.jpg"
                    className="home-image119"
                  />
                </div>
                <div className="home-container29">
                  <img
                    alt="image"
                    src="/playground_assets/5ee736f8b07905a627d2a5ebb3da6e041-300h.jpg"
                    className="home-image120"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/db25237758b05f3a4db70963c998858e1-300h.jpg"
                    className="home-image121"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/the-simpsons-season-23-78701-300h.jpg"
                    className="home-image122"
                  />
                </div>
                <div className="home-container30">
                  <img
                    alt="image"
                    src="/playground_assets/93294aa66ed5946a165770f2f0b9caee1-300h.jpg"
                    className="home-image123"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/aaddf5c6e5b1cc67d4333ec5b99ce44f1-300h.jpg"
                    className="home-image124"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/c7cd6c93e6a5c3d00fdb3b5fe88b76db1-300h.jpg"
                    className="home-image125"
                  />
                </div>
                <div className="home-container31">
                  <img
                    alt="image"
                    src="/playground_assets/f14dc95047ba5e0aed08f87be2f889d11-300h.jpg"
                    className="home-image126"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/81b06893e5660184d80231222f3c910e1-300h.jpg"
                    className="home-image127"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/98fa217da9cced05f6534a5087d2f7ae1-300h.jpg"
                    className="home-image128"
                  />
                </div>
                <div className="home-container32">
                  <img
                    alt="image"
                    src="/playground_assets/68af50e69f61a17e714cb4f89b4705691-300h.jpg"
                    className="home-image129"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/cb76afd9780b7de0181c08c28afbf6081-300h.jpg"
                    className="home-image130"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/555c12adddb276ff2a39dfcd7c6091e61-300h.jpg"
                    className="home-image131"
                  />
                </div>
                <div className="home-container33">
                  <img
                    alt="image"
                    src="/playground_assets/4dfcf8a64d48758d4412283080b414ac1-300h.jpg"
                    className="home-image132"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/4be44045abd21c27f45cd745e8d55e301-300h.jpg"
                    className="home-image133"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/03f70a3d2c9745f8e48afae98586d88a%20%5B1%5D1-300h.jpg"
                    className="home-image134"
                  />
                </div>
                <div className="home-container34">
                  <img
                    alt="image"
                    src="/playground_assets/5109f8ca7531b4d285b2beae0e1d193d1-300h.jpg"
                    className="home-image135"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/199ca1878b4fd2285ec9636131e6ea801-300h.jpg"
                    className="home-image136"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/43f7ac9cc54a95dd8afbe47f61ae1337%20%5B1%5D1-300h.jpg"
                    className="home-image137"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-services section-container">
          <div className="home-max-width01 max-content-container">
            <div className="home-heading-container1">
              <h1 className="home-text004 heading1">
                <span>A movie mashup of NFTs</span>
              </h1>
              <span className="home-text006">
                <span>featuring ducks, sharks, goats &amp; what not</span>
              </span>
              <button className="home-primary1 button-primary button-lg button">
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    A story about the ongoing Ether crash &amp; the ensuing
                    chaos surrounding it
                  </span>
                  <br></br>
                  <span>A tale of broken floors</span>
                  <br></br>
                  <span>
                    3d avatars of 1/1
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    A 1/1 chance to star in the movie, voice your avatar
                  </span>
                  <br></br>
                  <span>be</span>
                  <span>
                    Be a part of the one liners, storyboarding &amp; the
                    eventual voiceover of this grandiose mother of colllabs
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>sad</span>
                </span>
              </button>
            </div>
            <div className="home-gallery1">
              <div className="home-container35">
                <img
                  alt="image"
                  src="/playground_assets/bae-sicape-1000w.webp"
                  className="home-image138"
                />
                <img
                  alt="image"
                  src="/playground_assets/lwbzgzoas2t1fspufj8snwqyurjxhzjato7xgcpw_ty-1000w.png"
                  className="home-image139"
                />
                <img
                  alt="image"
                  src="/playground_assets/great-ape-society-1000w.png"
                  className="home-image140"
                />
                <img
                  alt="image"
                  src="/playground_assets/ee38b795-a149-4480-990b-c76ca3c4978c-1000w.jpg"
                  className="home-image141"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-05t113715.991-1000w.png"
                  className="home-image142"
                />
              </div>
              <div className="home-container36">
                <img
                  alt="image"
                  src="/playground_assets/chillin-chameleons-1000w.png"
                  className="home-image143"
                />
                <img
                  alt="image"
                  src="/playground_assets/crazy-lizard-army-base-1000w.png"
                  className="home-image144"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20%5B52%5D-1000w.jpg"
                  className="home-image145"
                />
                <img
                  alt="image"
                  src="/playground_assets/thumb288%20%5B8%5D-1000w.webp"
                  className="home-image146"
                />
                <img
                  alt="image"
                  src="/playground_assets/penguin-fight-club-1000w.png"
                  className="home-image147"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-06-09t120712.970-1000w.png"
                  className="home-image148"
                />
                <img
                  alt="image"
                  src="/playground_assets/data1'-1000w.webp"
                  className="home-image149"
                />
              </div>
              <div className="home-container37">
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20%5B17%5D-1000w.jpg"
                  className="home-image150"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20%5B2%5D-1000w.jpg"
                  className="home-image151"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-06-09t120712.970-1000w.png"
                  className="home-image152"
                />
                <img
                  alt="image"
                  src="/playground_assets/phantomsnft_2-1000w.png"
                  className="home-image153"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-05t113122.164-1000w.png"
                  className="home-image154"
                />
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-05t114529.000-1000w.png"
                  className="home-image155"
                />
              </div>
              <div className="home-container38">
                <img
                  alt="image"
                  src="/playground_assets/data2-1000w.webp"
                  className="home-image156"
                />
                <div className="home-container39">
                  <img
                    alt="image"
                    src="/playground_assets/crazy-lizard-army-base-1000w.png"
                    className="home-image157"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/meta-girlfriends-300h.png"
                    className="home-image158"
                  />
                </div>
                <div className="home-container40">
                  <img
                    alt="image"
                    src="/playground_assets/e_gu6xxxmael6ou-400h.jpg"
                    className="home-image159"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/fcdysktxoairwzp-300h.jpg"
                    className="home-image160"
                  />
                </div>
                <div className="home-container41">
                  <img
                    alt="image"
                    src="/playground_assets/unnamed%20%5B31%5D-300h.jpg"
                    className="home-image161"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/deadfellaz-300h.png"
                    className="home-image162"
                  />
                </div>
                <div className="home-container42">
                  <img
                    alt="image"
                    src="/playground_assets/unnamed%20-%202022-01-05t122645.734-300h.png"
                    className="home-image163"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/slumboginis-300h.png"
                    className="home-image164"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-portofolio section-container">
          <div className="home-max-width02 max-content-container">
            <div className="home-text-container">
              <span className="home-text024">PROOF OF CONCEPT</span>
              <h2 className="home-text025 heading2">
                <span>Behold our NFT Movie Idea</span>
              </h2>
              <span className="home-text027">
                <span>
                  Presented below is a breakdown of how we are going to make a
                  seminal masterpiece in the everchanging landscape of movie
                  culture
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  It takes about 500grand to build a pilot, we&apos;re targeting
                  a 10th of that in current ETH prices
                </span>
                <br></br>
                <span>
                  Crowdsourcing some design elements for what NFTs do best - art
                  &amp; awesomeness
                </span>
                <br></br>
                <span>
                  690 minters will each be able to not only add their characters
                  but also any scenes or IP that they wanna see included in
                  action
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span>
                  1 3d renders in a unique artstyle for all will be made for
                  each
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>holder per mint</span>
              </span>
              <button className="button-secondary button-lg button">
                6 components of a Must Watch
              </button>
            </div>
            <div className="home-tab-selector-header">
              <span className="home-text042 tab-selector-btn">
                New World Who Dis?
              </span>
              <span className="home-text043 tab-selector-btn">Knot Knot</span>
              <span className="home-text044 tab-selector-btn">Burgeroober</span>
              <span className="home-text045 tab-selector-btn">Carpet diem</span>
              <span className="home-text046 tab-selector-btn">
                Final Showdown
              </span>
              <span className="tab-selector-btn">Artistry</span>
            </div>
            <div className="home-tab-selector-cards-container">
              <PortofolioCard
                image_src="/playground_assets/20673-600-300w.webp"
                project_title="1st things 1st - a whole new Other World that produces the woah"
                rootClassName="portofolio-card-root-class-name"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/676-600-400h.webp"
                project_title="Yee-haw in the yacht"
                rootClassName="portofolio-card-root-class-name5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/e_gu6xxxmael6ou-400h.jpg"
                project_title="10% wack, 20% relatable, 70% chaos"
                rootClassName="portofolio-card-root-class-name4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unnamed%20%5B15%5D-300w.png"
                project_title="Adventure across the terra terrain, lunar cycles, ether &amp; beyond"
                rootClassName="portofolio-card-root-class-name3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/730-600-400h.webp"
                project_title="Think Nike Secret Tournaments"
                rootClassName="portofolio-card-root-class-name2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/images%20%5B18%5D-400h.jpg"
                project_title="A unique art style that's visible from a few kms away to a snail"
                rootClassName="portofolio-card-root-class-name1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div className="home-about section-container">
          <div className="home-max-width03 max-content-container">
            <div className="home-text-container1">
              <span className="home-text048">about FuNDs</span>
              <h2 className="home-text049 heading2">
                <span>50 ETH split</span>
              </h2>
              <span className="home-text051">
                6 places the funds will be used in
              </span>
              <div className="home-checklist">
                <div className="home-check-item">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text052">
                    50% to movie storyboarding, vfx, theme soundtrack,
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
                <div className="home-check-item1">
                  <svg viewBox="0 0 1024 1024" className="home-icon02">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text053">
                    10% to 1/1 characters 3D build
                  </span>
                </div>
                <div className="home-check-item2">
                  <svg viewBox="0 0 1024 1024" className="home-icon04">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text054">9% to marketing</span>
                </div>
                <div className="home-check-item3">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text055">10% to trading</span>
                </div>
                <div className="home-check-item4">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text056">21% to team</span>
                </div>
                <div className="home-check-item5">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className="home-text057">
                    69% secondaries to charity
                  </span>
                </div>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="image"
                src="/playground_assets/loopy-donuts-1000w.png"
                className="home-image165"
              />
            </div>
          </div>
        </div>
        <div className="home-process section-container">
          <div className="home-max-width04 max-content-container">
            <span className="home-text058">Rarity Chairs</span>
            <h2 className="home-text059 heading2">
              <span>
                We use a simple 7 step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className="home-step">
              <span className="home-text063">01</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B1%5D1-200h.png"
                className="home-image166"
              />
              <div className="home-container43">
                <span className="home-text064">One Liners</span>
                <span className="home-text065">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step1">
              <span className="home-text066">02</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B2%5D1-200h.png"
                className="home-image167"
              />
              <div className="home-container44">
                <span className="home-text067">
                  Plot
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text068">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step2">
              <span className="home-text069">03</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B3%5D1-200h.png"
                className="home-image168"
              />
              <div className="home-container45">
                <span className="home-text070">Location</span>
                <span className="home-text071">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width05 max-content-container">
            <div className="home-step3">
              <span className="home-text072">04</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B4%5D1-200h.png"
                className="home-image169"
              />
              <div className="home-container46">
                <span className="home-text073">Custom Traits</span>
                <span className="home-text074">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className="home-step4">
              <span className="home-text075">05</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B5%5D1-200h.png"
                className="home-image170"
              />
              <div className="home-container47">
                <span className="home-text076">Bud Up</span>
                <span className="home-text077">
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className="home-step5">
              <span className="home-text078">06</span>
              <img
                alt="image"
                src="/playground_assets/chair%20%5B7%5D1-200h.png"
                className="home-image171"
              />
              <div className="home-container48">
                <span className="home-text079">
                  Cliffhangers, Money Shots &amp; Climax
                </span>
                <span className="home-text080">
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
          <div className="home-max-width06 max-content-container">
            <div className="home-step6">
              <span className="home-text081">07</span>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M512 786.286v-109.714c0-10.286-8-18.286-18.286-18.286h-109.714c-10.286 0-18.286 8-18.286 18.286v109.714c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286zM658.286 402.286c0-104.571-109.714-182.857-208-182.857-93.143 0-162.857 40-212 121.714-5.143 8-2.857 18.286 4.571 24l75.429 57.143c2.857 2.286 6.857 3.429 10.857 3.429 5.143 0 10.857-2.286 14.286-6.857 26.857-34.286 38.286-44.571 49.143-52.571 9.714-6.857 28.571-13.714 49.143-13.714 36.571 0 70.286 23.429 70.286 48.571 0 29.714-15.429 44.571-50.286 60.571-40.571 18.286-96 65.714-96 121.143v20.571c0 10.286 8 18.286 18.286 18.286h109.714c10.286 0 18.286-8 18.286-18.286v0c0-13.143 16.571-41.143 43.429-56.571 43.429-24.571 102.857-57.714 102.857-144.571zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <div className="home-container49">
                <span className="home-text082">Finale</span>
                <span className="home-text083">
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog section-container">
          <div className="home-max-width07 max-content-container">
            <h2 className="home-text084 heading2">
              <span>PLOT, Characters &amp; Logistics</span>
            </h2>
            <span className="home-text086">
              <span>
                Setup in the crumbling space time region of DeSuntralized
                MoonCity &amp; MoonMansions, -
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text088">Mystery of the Missing Moon</span>
              <span>
                {' '}
                entails the journey of a few adventurers who lived on the
                frontier of tech &amp; innovation. When the Moon went missing,
                the energy source of their DeSuntralized Society was at risk. So
                set forth the events &amp; challenges to bring back the rock -
                is it a heist, a mystery or a mashup of Chef, Tropic Thunder
                &amp; Chinatown. Jump in the discord to find out
              </span>
            </span>
            <a
              href="https://discord.gg/GqW8hrXYmJ"
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg viewBox="0 0 967.4605714285714 1024" className="home-icon14">
                <path d="M822.857 256c0-30.286-24.571-54.857-54.857-54.857s-54.857 24.571-54.857 54.857 24.571 54.857 54.857 54.857 54.857-24.571 54.857-54.857zM950.857 91.429c0 189.714-52.571 316-188 452-33.143 32.571-70.857 66.286-111.429 100.571l-11.429 216.571c-0.571 5.714-4 11.429-9.143 14.857l-219.429 128c-2.857 1.714-5.714 2.286-9.143 2.286-4.571 0-9.143-1.714-13.143-5.143l-36.571-36.571c-4.571-5.143-6.286-12-4.571-18.286l48.571-157.714-160.571-160.571-157.714 48.571c-1.714 0.571-3.429 0.571-5.143 0.571-4.571 0-9.714-1.714-13.143-5.143l-36.571-36.571c-5.714-6.286-6.857-15.429-2.857-22.286l128-219.429c3.429-5.143 9.143-8.571 14.857-9.143l216.571-11.429c34.286-40.571 68-78.286 100.571-111.429 142.857-142.286 252-188 450.857-188 10.286 0 19.429 8 19.429 18.286z"></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/GqW8hrXYmJ"
              target="_blank"
              rel="noreferrer noopener"
              className="home-primary3 button-secondary button-lg button"
            >
              Discord
            </a>
            <div className="home-blog-cards-container">
              <div className="home-blog-card">
                <img
                  alt="image"
                  src="/playground_assets/367e835f94c22998dfc1e291187937c91-1500w.jpg"
                  className="home-image172"
                />
                <span className="home-text090">
                  <span>Ether comes crumbling down</span>
                </span>
              </div>
              <div className="home-blog-card01">
                <img
                  alt="image"
                  src="/playground_assets/a61c0550b4b3216bf48b9a9ff191bfd8%20%5B1%5D1-1500w.jpg"
                  className="home-image173"
                />
                <span className="home-text092">
                  <span>
                    Detectives from a low floor project are hired to find out
                  </span>
                </span>
              </div>
              <div className="home-blog-card02">
                <img
                  alt="image"
                  src="/playground_assets/43f7ac9cc54a95dd8afbe47f61ae1337%20%5B1%5D1-300h.jpg"
                  className="home-image174"
                />
                <span className="home-text094">
                  <span>
                    All done with a Decentralized Discord recording session
                    &amp; launched as NFT movies
                  </span>
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container1">
              <div className="home-blog-card03">
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-29t224814.897-1500w.png"
                  className="home-image175"
                />
                <span className="home-text096">
                  <span>PondMaster69 &amp; the gaming tournament</span>
                </span>
              </div>
              <div className="home-blog-card04">
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-29t223901.555-1500w.png"
                  className="home-image176"
                />
                <span className="home-text098">
                  <span>
                    Darknet
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-blog-card05">
                <img
                  alt="image"
                  src="/playground_assets/unnamed%20-%202022-01-29t221756.566-1500w.png"
                  className="home-image177"
                />
                <span className="home-text100">
                  <span>Blue Collar Space Mechanic SirSappythe7th</span>
                </span>
              </div>
            </div>
            <div className="home-blog-cards-container2">
              <div className="home-blog-card06">
                <img
                  alt="image"
                  src="/playground_assets/914-600-1500w.webp"
                  className="home-image178"
                />
                <span className="home-text102">
                  <span>Fort Knock Knox</span>
                </span>
              </div>
              <div className="home-blog-card07">
                <img
                  alt="image"
                  src="/playground_assets/1923-600-600w.webp"
                  className="home-image179"
                />
                <span className="home-text104">
                  <span>Unwrapping the ether with a pink slip</span>
                </span>
              </div>
              <div className="home-blog-card08">
                <img
                  alt="image"
                  src="/playground_assets/716-3ymm4okif4onmw-kx1s4_cenegms12wvgbn2u4ufhvlzaxq_0s_nvdlqtgljxjpidetwgo-qyc_zlo-5loy7j0xjhdvfihy9ox4%3Dw335-1500w.png"
                  className="home-image180"
                />
                <span className="home-text106">
                  The Sinstitutions of CeFi who blocked the trades &amp; pawned
                  the liquidity - Blockchain nestles
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog1 section-container">
          <div className="home-max-width08 max-content-container">
            <h2 className="home-text107 heading2">
              <span>TEAM</span>
            </h2>
            <span className="home-text109">
              <span>
                3 time zones, 1 aim - to
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <button className="home-primary4 button-secondary button-lg button">
              Olivesz
            </button>
            <button className="home-primary5 button-secondary button-lg button">
              Pax Gold
            </button>
            <div className="home-blog-cards-container3">
              <div className="home-blog-card09">
                <a
                  href="https://twitter.com/krisbrownyo"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <img
                    alt="image"
                    src="/playground_assets/fplknvkxiae2w4v-1500w.jpg"
                    className="home-image181"
                  />
                </a>
                <span className="home-text111">
                  <span>Community Manager🤸♂</span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    Hasbulla&apos;s Best Friend, Discord fiend &amp; enthusiasm
                    that never ends
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>California🦅</span>
                </span>
              </div>
              <div className="home-blog-card10">
                <a
                  href="https://discord.gg/GqW8hrXYmJ"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link2"
                >
                  <img
                    alt="image"
                    src="/playground_assets/hall-of-fame-goat-lodge%20%5B1%5D-600w.png"
                    className="home-image182"
                  />
                </a>
                <span className="home-text121">
                  <span>Full stack🪣</span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>
                    6 pacs away from 6pac. got too much work, ain&apos;t never
                    enough hours
                  </span>
                  <br></br>
                  <span></span>
                  <br></br>
                  <span>New Delhi🥭</span>
                </span>
              </div>
              <div className="home-blog-card11">
                <a
                  href="https://twitter.com/RvPS_NFT"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link3"
                >
                  <img
                    alt="image"
                    src="/playground_assets/fvl4dvawuauskjt-1500w.png"
                    className="home-image183"
                  />
                </a>
                <div className="home-container50">
                  <span className="home-text131">
                    <span>Movie aficionado🍿</span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      way too much time on his hand, way too much. TGIF everyday
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>London🌂</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="home-primary6 button-secondary button-lg button">
              Red Lantern
            </button>
          </div>
        </div>
        <div className="home-banner section-container">
          <div className="home-max-width09 max-content-container">
            <span className="home-text141">Become a piece of history</span>
            <h2 className="home-text142 heading2">
              <span>Only 690 seats to mint</span>
            </h2>
            <span className="home-text144">
              <span>EARLY ACCESS TO THE TRADING CHANNEL (live after mint)</span>
            </span>
            <a
              href="https://presale.rockvspaperscissors.live/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-primary7 button-lg button-secondary-white button"
            >
              MINT
            </a>
          </div>
        </div>
      </main>
      <div className="home-about1 section-container">
        <div className="home-max-width10 max-content-container">
          <div className="home-text-container2">
            <h2 className="home-text146 heading2">
              <span>Post Mint Plans</span>
            </h2>
            <span className="home-text148">
              <span>iAm to take it live in 69-90 days</span>
              <br></br>
              <span></span>
              <br></br>
              <span>A. The package</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>1. Script</span>
              <br></br>
              <span>2. Storyboarding</span>
              <br></br>
              <span>3. Voice</span>
              <br></br>
              <span>4. Render</span>
              <br></br>
              <span></span>
              <br></br>
              <span>B. The Promo</span>
              <br></br>
              <span>1. Blow air over fire</span>
              <br></br>
              <span>2. Hype, Hoopla, have to have high interest</span>
              <br></br>
              <span></span>
              <br></br>
              <span>C. The Sellout &amp; Second Iteration</span>
              <br></br>
              <span>
                1. Sell movie as an NFT - split the funds with holders &amp; buy
                a space yacht
              </span>
              <br></br>
              <span>
                2.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>Build a franchise out of it</span>
              <br></br>
              <span>
                Everybody their grandma &amp; their genetically engineered AI
                pets will want to be a part of
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span></span>
            </span>
          </div>
          <div className="home-image-container1">
            <img
              alt="image"
              src="/playground_assets/fluffy-polar-bears-1000w.png"
              className="home-image184"
            />
          </div>
        </div>
      </div>
      <div className="home-footer section-container">
        <div className="home-separator"></div>
        <footer className="home-max-width11 max-content-container">
          <img
            alt="image"
            src="/playground_assets/chair%20%5B3%5D1-200h.png"
            className="home-image185"
          />
          <span className="home-text182">
            <span>Concept Pitch of Rock Paper Scissors - work in Progress</span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
