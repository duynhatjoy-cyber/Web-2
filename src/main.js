import './style.css'

if (window.location.pathname.replace(/\/$/, '') === '/booking') {
  import('./booking.js')
} else {

const img = {
  hero: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=2000&q=85',
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=85',
  hotel: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1000&q=85',
  lobby: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1000&q=85',
  suite: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1000&q=85',
  exterior: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1000&q=85',
  lounge: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=85'
}
const hotels = [
  ['Lifrooms Central','TP. Hồ Chí Minh','Quận 1','28 Lê Thánh Tôn',img.room,'Không gian tinh tế'],
  ['Lifrooms Boutique','TP. Hồ Chí Minh','Quận 1','47 Nguyễn Thái Bình',img.hotel,'Ngay trung tâm'],
  ['Lifrooms Riverside','TP. Hồ Chí Minh','Quận 4','12 Bến Vân Đồn',img.lobby,'Tầm nhìn thành phố'],
  ['Lifrooms Garden','TP. Hồ Chí Minh','Quận 3','86 Võ Văn Tần',img.suite,'Yên tĩnh, riêng tư'],
  ['Lifrooms Hanoi','Hà Nội','Hoàn Kiếm','18 Hàng Bông',img.exterior,'Nét duyên phố cổ'],
  ['Lifrooms Danang','Đà Nẵng','Sơn Trà','35 Võ Nguyên Giáp',img.lounge,'Gần biển']
]
const mark = `<svg class="brand-mark" viewBox="0 0 80 80" aria-hidden="true"><path d="M28 13 40 4a8 8 0 0 1 10 0l22 17a8 8 0 0 1 3 6v30a8 8 0 0 1-8 8H48" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="m5 44 43-12-10 43-11-21Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>`
const logo = `<a class="logo" href="#top" aria-label="Lifrooms, về đầu trang">${mark}<span class="logo-words"><strong><span>Lif</span><em>rooms</em></strong><small>Your Trusted Partner</small></span></a>`

document.querySelector('#app').innerHTML = `
<header class="site-header" id="top"><div class="container nav-wrap">${logo}<button class="menu-toggle" aria-label="Mở menu" aria-expanded="false">☰</button><nav class="main-nav" aria-label="Điều hướng chính"><a href="#booking">Đặt phòng</a><a href="#destinations">Điểm đến</a><a href="#experience">Trải nghiệm</a><a href="#about">Về Lifrooms</a></nav><a class="nav-contact" href="mailto:hello@lifrooms.vn">Liên hệ tư vấn ↗</a></div><div class="sticky-booking container" id="sticky-booking"></div></header>
<main>
<section class="hero" style="--hero-image:url('${img.hero}')"><div class="hero-shade"></div><div class="container hero-inner"><div class="hero-copy"><p class="eyebrow light" id="hero-kicker">LIFROOMS · KHÔNG GIAN LƯU TRÚ TIN CẬY</p><h1 id="hero-title">Nơi mỗi chuyến đi<br><i>trở nên đáng nhớ.</i></h1><p class="hero-description" id="hero-description">Khám phá những không gian lưu trú tinh tế, tiện nghi và đầy cảm hứng tại những điểm đến bạn yêu thích.</p><a class="outline-button" href="#destinations">KHÁM PHÁ LIFROOMS <span>↗</span></a></div><div class="hero-bottom"><div class="hero-feature"><span class="feature-icon">◇</span><div><strong>Phòng nghỉ tinh tế</strong><small>Thiết kế cho sự thoải mái</small></div></div><div class="hero-feature"><span class="feature-icon">⌖</span><div><strong>Vị trí thuận tiện</strong><small>Ở gần nơi bạn muốn đến</small></div></div><div class="hero-feature"><span class="feature-icon">✧</span><div><strong>Trải nghiệm trọn vẹn</strong><small>Chu đáo trong từng chi tiết</small></div></div></div></div><button class="hero-arrow hero-prev" aria-label="Ảnh trước">‹</button><button class="hero-arrow hero-next" aria-label="Ảnh tiếp">›</button><div class="hero-dots" aria-label="Chọn ảnh đầu trang"></div></section>
<section class="booking-section" id="booking"><div class="container"><form class="booking-bar" id="booking-form"><label class="booking-field"><span>CHỌN VỊ TRÍ</span><select name="city" aria-label="Chọn vị trí"><option value="all">Tất cả địa điểm</option><option>TP. Hồ Chí Minh</option><option>Hà Nội</option><option>Đà Nẵng</option></select></label><div class="booking-field dates-field"><span>NGÀY NHẬN — TRẢ PHÒNG</span><div class="date-inputs"><input type="date" name="checkin" aria-label="Ngày nhận phòng"><b>→</b><input type="date" name="checkout" aria-label="Ngày trả phòng"></div></div><label class="booking-field"><span>KHÁCH</span><select name="guests" aria-label="Số khách"><option>1 khách</option><option selected>2 khách</option><option>3 khách</option><option>4 khách</option><option>5+ khách</option></select></label><button class="search-button" type="submit">⌕ &nbsp;TÌM KIẾM</button></form><p class="booking-message" id="booking-message" role="status"></p></div></section>
<section class="featured section-pad" id="featured"><div class="container"><div class="section-heading"><p class="eyebrow">NHỮNG ĐIỂM DỪNG ĐÁNG NHỚ</p><h2>Khám phá điều mới lạ<br><i>cùng Lifrooms.</i></h2><p>Mỗi nơi ở là một góc nhìn khác về thành phố, được lựa chọn để hành trình của bạn thêm nhiều cảm hứng.</p></div><div class="featured-grid" id="featured-grid"></div></div></section>
<section class="discover section-pad" id="destinations"><div class="container"><div class="destination-heading"><div><p class="eyebrow">TÌM NƠI PHÙ HỢP VỚI BẠN</p><h2>Điểm đến</h2></div><div class="city-tabs" role="tablist" aria-label="Lọc theo thành phố"><button class="active" data-city="all" role="tab" aria-selected="true">Tất cả</button><button data-city="TP. Hồ Chí Minh" role="tab">TP. Hồ Chí Minh</button><button data-city="Hà Nội" role="tab">Hà Nội</button><button data-city="Đà Nẵng" role="tab">Đà Nẵng</button></div></div><div class="district-tabs" id="district-tabs" aria-label="Lọc theo khu vực"></div><div class="destination-layout"><aside class="filter-sidebar"><p class="filter-title">KHÁM PHÁ THEO PHONG CÁCH</p><button class="style-filter active" data-style="all"><span>Tất cả không gian</span><b>↗</b></button><button class="style-filter" data-style="city"><span>Giữa lòng thành phố</span><b>↗</b></button><button class="style-filter" data-style="quiet"><span>Yên tĩnh & thư thái</span><b>↗</b></button><button class="style-filter" data-style="view"><span>Góc nhìn đặc biệt</span><b>↗</b></button><div class="sidebar-note"><span>✧</span><p>Mỗi không gian Lifrooms đều được chọn để bạn an tâm tận hưởng hành trình.</p></div></aside><div><div class="results-heading"><strong id="result-count"></strong><span>Chọn điểm dừng yêu thích của bạn</span></div><div class="hotel-grid" id="hotel-grid"></div><div class="pagination" id="pagination"></div></div></div></div></section>
<section class="story" id="experience" style="--story-image:url('${img.lounge}')"><div class="container story-grid"><div><p class="eyebrow light">TRẢI NGHIỆM LIFROOMS</p><h2>Không chỉ là<br>một nơi dừng chân.</h2><p>Mỗi không gian được chăm chút để bạn cảm thấy thân thuộc, thư thái và tự do tận hưởng hành trình theo cách riêng.</p><a class="text-link" href="#about">TÌM HIỂU THÊM ↗</a></div><div class="story-list"><article><span>01</span><div><h3>Thiết kế có cảm xúc</h3><p>Không gian hài hòa, ấm áp và đủ riêng tư để bạn thực sự nghỉ ngơi.</p></div></article><article><span>02</span><div><h3>Tiện nghi vừa vặn</h3><p>Từ giấc ngủ êm ái đến những tiện ích cần thiết, mọi thứ luôn sẵn sàng.</p></div></article><article><span>03</span><div><h3>Chăm sóc tận tâm</h3><p>Đội ngũ Lifrooms luôn đồng hành để mỗi chuyến đi thêm nhẹ nhàng.</p></div></article></div></div></section>
<section class="numbers" id="about"><div class="container numbers-grid"><div><strong>06</strong><span>ĐIỂM LƯU TRÚ</span></div><div><strong>03</strong><span>THÀNH PHỐ</span></div><div><strong>24/7</strong><span>HỖ TRỢ KHÁCH HÀNG</span></div><div><strong>100%</strong><span>TẬN TÂM MỖI NGÀY</span></div></div></section>
<section class="cta" style="--cta-image:url('${img.exterior}')"><div class="container"><p class="eyebrow light">BẮT ĐẦU HÀNH TRÌNH CỦA BẠN</p><h2>Chỗ ở lý tưởng đang<br><i>chờ bạn khám phá.</i></h2><p>Chọn điểm đến, đặt phòng và tận hưởng những ngày thật đáng nhớ cùng Lifrooms.</p><a class="solid-button" href="#booking">TÌM PHÒNG NGAY ↗</a></div></section>
</main><div class="recent-carousel" id="recent-carousel" hidden><button class="recent-close" aria-label="Đóng gợi ý khách sạn">×</button><div class="recent-content"></div><div class="recent-controls"><button data-recent-dir="-1" aria-label="Khách sạn trước">←</button><div class="recent-dots"></div><button data-recent-dir="1" aria-label="Khách sạn tiếp">→</button></div></div><div class="hotel-modal" id="hotel-modal" hidden><div class="modal-backdrop" data-close="modal"></div><div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modal-title"><button class="modal-close" type="button" data-close="modal" aria-label="Đóng">×</button><img id="modal-image" alt=""><div class="modal-body"><p class="eyebrow" id="modal-location"></p><h2 id="modal-title"></h2><p id="modal-description"></p><div class="modal-amenities"><span>✓ Phòng nghỉ tiện nghi</span><span>✓ Hỗ trợ chu đáo</span><span>✓ Vị trí thuận tiện</span></div><a class="solid-button" id="modal-contact" href="mailto:hello@lifrooms.vn">LIÊN HỆ ĐẶT PHÒNG ↗</a></div></div></div>
<footer class="footer"><div class="container footer-top"><div class="footer-intro">${logo}<p>Lifrooms mang đến những không gian lưu trú tin cậy, nơi sự thoải mái và trải nghiệm tốt đẹp luôn song hành.</p></div><div><h4>KHÁM PHÁ</h4><a href="#booking">Đặt phòng</a><a href="#destinations">Điểm đến</a><a href="#experience">Trải nghiệm</a></div><div><h4>LIÊN HỆ</h4><a href="mailto:hello@lifrooms.vn">hello@lifrooms.vn</a><p>Việt Nam</p></div></div><div class="container footer-bottom"><span>© 2026 Lifrooms. All rights reserved.</span><span>Your Trusted Partner</span></div></footer>`

const hero = document.querySelector('.hero')
const bookingSection = document.querySelector('.booking-section')
document.querySelector('.hero-inner').insertBefore(bookingSection, document.querySelector('.hero-bottom'))
const stickyForm = document.querySelector('#booking-form').cloneNode(true)
stickyForm.id = 'sticky-booking-form'
document.querySelector('#sticky-booking').append(stickyForm)
const header = document.querySelector('.site-header')
function updateHeader() {
  const bookingPassed = bookingSection.getBoundingClientRect().bottom < 105
  header.classList.toggle('scrolled', window.scrollY > 32)
  header.classList.toggle('search-mode', bookingPassed)
  document.querySelectorAll('#hotel-grid .hotel-card').forEach(card => {
    if (card.getBoundingClientRect().bottom < window.innerHeight * .35) {
      const index = Number(card.querySelector('[data-hotel]')?.dataset.hotel)
      if (Number.isInteger(index) && !recentHotels.includes(index)) {
        recentHotels.push(index)
        renderRecent()
      }
    }
  })
  const recentVisible = document.querySelector('#destinations').getBoundingClientRect().bottom < window.innerHeight * .72
  const recent = document.querySelector('#recent-carousel')
  recent.hidden = !recentVisible || !recentHotels.length || recent.dataset.dismissed === 'true'
}
window.addEventListener('scroll', updateHeader, {passive:true})
window.addEventListener('resize', updateHeader)

const slides = [
  { image:img.hero, kicker:'LIFROOMS · KHÔNG GIAN LƯU TRÚ TIN CẬY', title:'Nơi mỗi chuyến đi<br><i>trở nên đáng nhớ.</i>', description:'Khám phá những không gian lưu trú tinh tế, tiện nghi và đầy cảm hứng tại những điểm đến bạn yêu thích.' },
  { image:img.room, kicker:'THIẾT KẾ CHO RIÊNG BẠN', title:'Giấc ngủ êm ái.<br><i>Ngày mới đầy cảm hứng.</i>', description:'Mỗi căn phòng được chăm chút từ ánh sáng, chất liệu đến tiện nghi, để bạn luôn thấy thoải mái như ở nhà.' },
  { image:img.lobby, kicker:'TRẢI NGHIỆM TIN CẬY', title:'Một nơi dừng chân.<br><i>Ngàn câu chuyện đẹp.</i>', description:'Tận hưởng sự riêng tư, phong cách tinh tế và dịch vụ chu đáo trên mỗi hành trình cùng Lifrooms.' }
]
let activeSlide = 0
function renderSlide() {
  const slide = slides[activeSlide]
  hero.style.setProperty('--hero-image', `url("${slide.image}")`)
  document.querySelector('#hero-kicker').textContent = slide.kicker
  document.querySelector('#hero-title').innerHTML = slide.title
  document.querySelector('#hero-description').textContent = slide.description
  document.querySelector('.hero-dots').innerHTML = slides.map((_, i) => `<button class="${i === activeSlide ? 'active' : ''}" data-slide="${i}" aria-label="Ảnh ${i + 1}"></button>`).join('')
}
document.querySelector('.hero-prev').addEventListener('click', () => { activeSlide = (activeSlide + slides.length - 1) % slides.length; renderSlide() })
document.querySelector('.hero-next').addEventListener('click', () => { activeSlide = (activeSlide + 1) % slides.length; renderSlide() })
document.querySelector('.hero-dots').addEventListener('click', e => { const dot = e.target.closest('[data-slide]'); if (dot) { activeSlide = Number(dot.dataset.slide); renderSlide() } })
renderSlide()

const grid = document.querySelector('#hotel-grid')
const tabs = [...document.querySelectorAll('.city-tabs button')]
const featured = document.querySelector('#featured-grid')
featured.innerHTML = hotels.slice(0, 3).map((h, i) => `<article class="featured-card"><button class="featured-image" data-hotel="${i}" aria-label="Xem ${h[0]}"><img src="${h[4]}" alt="Không gian ${h[0]}"><span>0${i + 1} / LIFROOMS</span></button><div class="featured-copy"><p class="card-eyebrow">${h[1]} · ${h[2]}</p><h3>${h[0]}</h3><p>${h[5]} — một không gian được chăm chút để bạn nghỉ ngơi và cảm nhận thành phố theo nhịp của riêng mình.</p><button class="card-link" data-hotel="${i}">KHÁM PHÁ <span>↗</span></button></div></article>`).join('')
let currentCity = 'all', currentDistrict = 'all', currentStyle = 'all', currentPage = 1
function renderDistricts() {
  const areas = [...new Set(hotels.filter(h => currentCity === 'all' || h[1] === currentCity).map(h => h[2]))]
  if (currentDistrict !== 'all' && !areas.includes(currentDistrict)) currentDistrict = 'all'
  document.querySelector('#district-tabs').innerHTML = ['all', ...areas].map(area => `<button class="${area === currentDistrict ? 'active' : ''}" data-district="${area}">${area === 'all' ? 'Tất cả khu vực' : area}</button>`).join('')
}
function showHotels() {
  renderDistricts()
  const styleMatch = (h) => currentStyle === 'all' || (currentStyle === 'city' && [0,1,4].includes(hotels.indexOf(h))) || (currentStyle === 'quiet' && [3,5].includes(hotels.indexOf(h))) || (currentStyle === 'view' && [2,5].includes(hotels.indexOf(h)))
  const filtered = hotels.filter(h => (currentCity === 'all' || h[1] === currentCity) && (currentDistrict === 'all' || h[2] === currentDistrict) && styleMatch(h))
  const pageSize = 6
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  currentPage = Math.min(currentPage, totalPages)
  grid.innerHTML = filtered.slice((currentPage - 1) * pageSize, currentPage * pageSize).map(h => `<article class="hotel-card"><button class="hotel-image" data-hotel="${hotels.indexOf(h)}" aria-label="Xem ${h[0]}"><img src="${h[4]}" alt="Không gian ${h[0]}" loading="lazy"><span>${h[5]}</span></button><div class="hotel-content"><p class="card-eyebrow">${h[1]} · ${h[2]}</p><h3>${h[0]}</h3><p class="hotel-address">⌖ &nbsp;${h[3]}, ${h[2]}</p><a class="card-link" href="/booking?hotel=${hotels.indexOf(h)}&adults=2">Đặt ngay <span>↗</span></a></div></article>`).join('')
  if (!filtered.length) grid.innerHTML = '<p class="no-results">Chưa có không gian phù hợp. Hãy thử bộ lọc khác.</p>'
  document.querySelector('#result-count').textContent = `${filtered.length.toString().padStart(2, '0')} không gian`
  document.querySelector('#pagination').innerHTML = totalPages > 1 ? Array.from({length: totalPages}, (_, i) => `<button class="${currentPage === i + 1 ? 'active' : ''}" data-page="${i + 1}" aria-label="Trang ${i + 1}">${i + 1}</button>`).join('') : ''
  tabs.forEach(tab => { tab.classList.toggle('active', tab.dataset.city === currentCity); tab.setAttribute('aria-selected', String(tab.dataset.city === currentCity)) })
  document.querySelectorAll('.style-filter').forEach(button => button.classList.toggle('active', button.dataset.style === currentStyle))
}
tabs.forEach(tab => tab.addEventListener('click', () => { currentCity = tab.dataset.city; currentPage = 1; showHotels() }))
document.querySelector('#district-tabs').addEventListener('click', e => { const button = e.target.closest('[data-district]'); if (!button) return; currentDistrict = button.dataset.district; currentPage = 1; showHotels() })
document.querySelectorAll('.style-filter').forEach(button => button.addEventListener('click', () => { currentStyle = button.dataset.style; currentPage = 1; showHotels() }))
document.querySelector('#pagination').addEventListener('click', e => { const button = e.target.closest('[data-page]'); if (!button) return; currentPage = Number(button.dataset.page); showHotels(); document.querySelector('#destinations').scrollIntoView({behavior:'smooth'}) })
const modal = document.querySelector('#hotel-modal')
const recent = document.querySelector('#recent-carousel')
let recentHotels = [], recentIndex = 0
function renderRecent() {
  if (!recentHotels.length) return
  const h = hotels[recentHotels[recentIndex]]
  recent.querySelector('.recent-content').innerHTML = `<img src="${h[4]}" alt=""><div><strong>${h[0]}</strong><p>${h[1]} · ${h[2]}</p><button data-hotel="${recentHotels[recentIndex]}">Xem chi tiết ↗</button></div>`
  recent.querySelector('.recent-dots').innerHTML = recentHotels.map((_, i) => `<button class="${i === recentIndex ? 'active' : ''}" data-recent-index="${i}" aria-label="Khách sạn ${i + 1}"></button>`).join('')
}
recent.querySelector('.recent-close').addEventListener('click', () => { recent.dataset.dismissed = 'true'; recent.hidden = true })
recent.querySelector('.recent-controls').addEventListener('click', e => {
  const direction = e.target.closest('[data-recent-dir]')
  const dot = e.target.closest('[data-recent-index]')
  if (direction) recentIndex = (recentIndex + recentHotels.length + Number(direction.dataset.recentDir)) % recentHotels.length
  if (dot) recentIndex = Number(dot.dataset.recentIndex)
  renderRecent()
})
document.addEventListener('click', e => {
  const button = e.target.closest('[data-hotel]')
  if (button) {
    const h = hotels[Number(button.dataset.hotel)]
    const viewed = Number(button.dataset.hotel)
    recentHotels = [viewed, ...recentHotels.filter(i => i !== viewed)].slice(0,6)
    recentIndex = 0
    renderRecent()
    document.querySelector('#modal-image').src = h[4]
    document.querySelector('#modal-image').alt = `Không gian ${h[0]}`
    document.querySelector('#modal-location').textContent = `${h[1]} · ${h[2]}`
    document.querySelector('#modal-title').textContent = h[0]
    document.querySelector('#modal-description').textContent = `${h[5]} tại ${h[3]}, ${h[2]}. Tận hưởng không gian lưu trú thoải mái và một hành trình thật đáng nhớ cùng Lifrooms.`
    document.querySelector('#modal-contact').href = `/booking?hotel=${viewed}&adults=2`
    modal.hidden = false; document.body.style.overflow = 'hidden'; document.querySelector('.modal-close').focus()
  }
  if (e.target.closest('[data-close]')) { modal.hidden = true; document.body.style.overflow = '' }
})
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) { modal.hidden = true; document.body.style.overflow = '' } })
function handleSearch(e) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const a = data.get('checkin'), b = data.get('checkout')
  const message = document.querySelector('#booking-message')
  if (a && b && b <= a) { message.textContent = 'Ngày trả phòng cần sau ngày nhận phòng.'; return }
  message.textContent = ''
  currentCity = data.get('city'); currentDistrict = 'all'; currentStyle = 'all'; currentPage = 1; showHotels()
  document.querySelector('#destinations').scrollIntoView({ behavior: 'smooth' })
}
document.querySelector('#booking-form').addEventListener('submit', handleSearch)
stickyForm.addEventListener('submit', handleSearch)
const toggle = document.querySelector('.menu-toggle')
toggle.addEventListener('click', () => { const open = document.querySelector('.main-nav').classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)) })
document.querySelectorAll('.main-nav a').forEach(a => a.addEventListener('click', () => { document.querySelector('.main-nav').classList.remove('open'); toggle.setAttribute('aria-expanded', 'false') }))
showHotels()
renderRecent()
updateHeader()

const cta = document.querySelector('.cta')
const ctaContent = cta.querySelector('.container')
ctaContent.classList.add('cta-content')
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
let parallaxFrame = 0
function updateCtaParallax() {
  parallaxFrame = 0
  if (reducedMotion.matches) { ctaContent.style.transform = ''; return }
  const rect = cta.getBoundingClientRect()
  if (rect.bottom < 0 || rect.top > window.innerHeight) return
  const centerDifference = (window.innerHeight / 2) - (rect.top + rect.height / 2)
  const range = (window.innerHeight + rect.height) / 2
  const offset = Math.max(-36, Math.min(36, centerDifference / range * 36))
  ctaContent.style.transform = `translateY(${offset.toFixed(2)}px)`
}
function scheduleCtaParallax() {
  if (!parallaxFrame) parallaxFrame = requestAnimationFrame(updateCtaParallax)
}
window.addEventListener('scroll', scheduleCtaParallax, { passive: true })
window.addEventListener('resize', scheduleCtaParallax)
reducedMotion.addEventListener('change', scheduleCtaParallax)
scheduleCtaParallax()
}
