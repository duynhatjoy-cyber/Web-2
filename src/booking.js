import './booking.css'

const photos = {
  room: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1100&q=85',
  suite: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1100&q=85',
  lobby: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1100&q=85',
  hotel: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1100&q=85',
  exterior: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1100&q=85',
}
const hotels = [
  { name:'Lifrooms Central', address:'28 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', image:photos.hotel },
  { name:'Lifrooms Boutique', address:'47 Nguyễn Thái Bình, Quận 1, TP. Hồ Chí Minh', image:photos.lobby },
  { name:'Lifrooms Riverside', address:'12 Bến Vân Đồn, Quận 4, TP. Hồ Chí Minh', image:photos.exterior },
  { name:'Lifrooms Garden', address:'86 Võ Văn Tần, Quận 3, TP. Hồ Chí Minh', image:photos.suite },
  { name:'Lifrooms Hanoi', address:'18 Hàng Bông, Hoàn Kiếm, Hà Nội', image:photos.hotel },
  { name:'Lifrooms Danang', address:'35 Võ Nguyên Giáp, Sơn Trà, Đà Nẵng', image:photos.exterior },
]
const rooms = [
  { name:'Deluxe Room', subtitle:'Không gian ấm cúng cho hành trình thư thái', image:photos.room, size:28, beds:'1 giường đôi', people:2, price:890000, perks:['Wi-Fi miễn phí','Điều hòa','Phòng tắm riêng'] },
  { name:'Premier Room', subtitle:'Rộng rãi hơn để tận hưởng từng khoảnh khắc', image:photos.suite, size:34, beds:'1 giường lớn', people:3, price:1190000, perks:['Bữa sáng','Wi-Fi miễn phí','Tầm nhìn thành phố'] },
  { name:'Lifrooms Suite', subtitle:'Một chốn nghỉ riêng tư với nhiều tiện nghi', image:photos.lobby, size:46, beds:'1 giường lớn + sofa', people:5, price:1590000, perks:['Bữa sáng','Không gian tiếp khách','Nhận phòng ưu tiên'] },
]
const params = new URLSearchParams(location.search)
const today = new Date().toLocaleDateString('en-CA')
const requestedDate = params.get('date') || ''
const initialDate = /^\d{4}-\d{2}-\d{2}$/.test(requestedDate) && !Number.isNaN(new Date(requestedDate + 'T12:00:00').getTime()) && requestedDate >= today ? requestedDate : today
const addDays = (date, days) => { const d = new Date(date + 'T12:00:00'); d.setDate(d.getDate() + days); return d.toLocaleDateString('en-CA') }
const daysBetween = (a, b) => Math.round((new Date(b + 'T12:00:00') - new Date(a + 'T12:00:00')) / 86400000)
const money = value => new Intl.NumberFormat('vi-VN').format(value) + ' ₫'
const dateLabel = value => new Intl.DateTimeFormat('vi-VN', {day:'2-digit',month:'2-digit',year:'numeric'}).format(new Date(value + 'T12:00:00'))
const initialHotel = Math.max(0, Math.min(hotels.length - 1, Number(params.get('hotel') ?? 0) || 0))
const ages = (params.get('children-age') || '').split(';').filter(Boolean).map(Number).filter(n => n >= 0 && n <= 17)
const state = {
  hotel: initialHotel,
  checkin: initialDate,
  checkout: addDays(initialDate, Math.max(1, Math.min(60, Number(params.get('nights')) || 2))),
  adults: Math.max(1, Math.min(10, Number(params.get('adults')) || 2)),
  children: ages.length,
  ages,
  room: null,
}
const mark = '<svg class="brand-mark" viewBox="0 0 80 80" aria-hidden="true"><path d="M28 13 40 4a8 8 0 0 1 10 0l22 17a8 8 0 0 1 3 6v30a8 8 0 0 1-8 8H48" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/><path d="m5 44 43-12-10 43-11-21Z" fill="currentColor" stroke="currentColor" stroke-width="4" stroke-linejoin="round"/></svg>'
document.querySelector('#app').innerHTML = `
<div class="booking-topline"><div class="booking-shell">LIFROOMS · YOUR TRUSTED PARTNER <span>Đặt phòng trực tiếp, tận hưởng hành trình theo cách của bạn</span></div></div>
<header class="booking-header"><div class="booking-shell header-inner"><a class="booking-logo" href="/">${mark}<span><strong>Lif<em>rooms</em></strong><small>Your Trusted Partner</small></span></a><nav class="booking-steps" aria-label="Các bước đặt phòng"><span class="active"><b>1</b> Chọn phòng</span><i></i><span id="step-info"><b>2</b> Thông tin khách</span><i></i><span id="step-done"><b>3</b> Xác nhận</span></nav><a class="back-link" href="/">← Về trang chủ</a></div></header>
<main class="booking-main booking-shell">
  <div class="booking-breadcrumb"><a href="/">Trang chủ</a><span>›</span><span>Đặt phòng</span></div>
  <div class="booking-title"><div><p class="overline">ĐẶT PHÒNG CÙNG LIFROOMS</p><h1>Chọn chốn nghỉ <i>phù hợp với bạn.</i></h1><p>Xem phòng, điều chỉnh lịch trình và kiểm tra thông tin đặt phòng trong vài bước.</p></div><div class="help-chip">✧ <span>Cần hỗ trợ?<br><strong>Chúng tôi luôn sẵn sàng</strong></span></div></div>
  <div class="booking-layout"><div class="booking-primary">
    <section class="search-panel" aria-labelledby="search-title"><div class="block-heading"><span class="step-number">01</span><div><p class="overline">KẾ HOẠCH CHUYẾN ĐI</p><h2 id="search-title">Thông tin lưu trú</h2></div></div><form id="trip-form"><div class="trip-grid"><label class="wide"><span>Khách sạn</span><select name="hotel">${hotels.map((h,i) => `<option value="${i}" ${i===state.hotel?'selected':''}>${h.name}</option>`).join('')}</select></label><label><span>Nhận phòng</span><input type="date" name="checkin" value="${state.checkin}" required></label><label><span>Trả phòng</span><input type="date" name="checkout" value="${state.checkout}" required></label><label><span>Người lớn</span><select name="adults">${Array.from({length:10},(_,i) => `<option value="${i+1}" ${i+1===state.adults?'selected':''}>${i+1} người</option>`).join('')}</select></label><label><span>Trẻ em</span><select name="children">${Array.from({length:6},(_,i) => `<option value="${i}" ${i===state.children?'selected':''}>${i} trẻ</option>`).join('')}</select></label></div><div class="children-ages" id="children-ages"></div><div class="trip-actions"><p id="trip-message" role="status"></p><button class="small-primary" type="submit">Cập nhật tìm kiếm ↗</button></div></form></section>
    <section class="property-panel"><div class="property-gallery"><img id="property-main-image" alt=""><img src="${photos.room}" alt="Phòng nghỉ Lifrooms"><img src="${photos.lobby}" alt="Sảnh khách sạn Lifrooms"></div><div class="property-info"><div><p class="overline">KHÔNG GIAN LƯU TRÚ</p><h2 id="property-name"></h2><p id="property-address"></p></div><span class="property-badge">✧ Lifrooms Select</span></div><div class="property-perks"><span>✓ Vị trí thuận tiện</span><span>✓ Hỗ trợ chu đáo</span><span>✓ Không gian tinh tế</span></div></section>
    <section class="rooms-section" id="rooms"><div class="block-heading"><span class="step-number">02</span><div><p class="overline">LỰA CHỌN CỦA BẠN</p><h2>Chọn hạng phòng</h2></div></div><p class="section-sub">Các mức giá dưới đây là dữ liệu minh họa cho giao diện đặt phòng.</p><div class="room-list" id="room-list"></div></section>
    <section class="guest-section" id="guest-section"><div class="block-heading"><span class="step-number">03</span><div><p class="overline">THÔNG TIN LIÊN HỆ</p><h2>Thông tin khách lưu trú</h2></div></div><form id="guest-form"><div class="guest-grid"><label><span>Họ và tên <b>*</b></span><input name="name" autocomplete="name" placeholder="Nhập họ và tên" required></label><label><span>Số điện thoại <b>*</b></span><input name="phone" type="tel" autocomplete="tel" placeholder="Số điện thoại liên hệ" pattern="[0-9+(). -]{9,18}" required></label><label><span>Email <b>*</b></span><input name="email" type="email" autocomplete="email" placeholder="name@example.com" required></label><label><span>Quốc gia / vùng lãnh thổ</span><select name="country"><option>Việt Nam</option><option>Khác</option></select></label><label class="full"><span>Yêu cầu đặc biệt</span><textarea name="note" rows="3" placeholder="Giờ đến dự kiến, loại giường mong muốn..."></textarea></label></div><label class="agree"><input type="checkbox" name="agree" required><span>Tôi đã kiểm tra thông tin và hiểu đây là bản xem trước giao diện, chưa gửi đặt phòng thật.</span></label><p class="form-message" id="form-message" role="status"></p><button class="submit-mobile" type="submit">Xem xác nhận mẫu ↗</button></form></section>
  </div><aside class="summary-column"><div class="summary-card"><p class="overline">TÓM TẮT ĐẶT PHÒNG</p><h2>Chuyến đi của bạn</h2><div class="summary-hotel"><img id="summary-image" alt=""><div><strong id="summary-hotel"></strong><span id="summary-address"></span></div></div><div class="summary-dates"><div><small>NHẬN PHÒNG</small><strong id="summary-checkin"></strong></div><div><small>TRẢ PHÒNG</small><strong id="summary-checkout"></strong></div></div><div class="summary-meta"><span id="summary-nights"></span><span id="summary-guests"></span></div><div class="summary-room" id="summary-room"></div><div class="price-lines" id="price-lines"></div><div class="summary-total"><span>Tổng tạm tính</span><strong id="summary-total"></strong></div><p class="summary-disclaimer">Giá minh họa, chưa xác nhận tình trạng phòng. Không có khoản thanh toán nào được thực hiện trên trang này.</p><button id="summary-submit" class="booking-primary-button">Xem xác nhận mẫu ↗</button></div><div class="trust-card"><span>✦</span><p><strong>Yên tâm lên kế hoạch</strong><br>Thông tin chuyến đi luôn hiển thị rõ ràng trước khi bạn xác nhận.</p></div></aside></div>
</main>
<div class="confirmation" id="confirmation" hidden><div class="confirmation-backdrop"></div><div class="confirmation-card" role="dialog" aria-modal="true" aria-labelledby="confirmation-title"><div class="confirmation-icon">✓</div><p class="overline">BẢN XEM TRƯỚC</p><h2 id="confirmation-title">Thông tin đã sẵn sàng</h2><p id="confirmation-copy"></p><div id="confirmation-details"></div><p class="confirmation-note">Đây là xác nhận mẫu trên trình duyệt; chưa tạo hoặc gửi đặt phòng thật.</p><button id="confirmation-close" class="booking-primary-button">Quay lại trang đặt phòng</button></div></div>
<footer class="booking-footer"><div class="booking-shell"><span>© 2026 Lifrooms · Your Trusted Partner</span><a href="/">Về trang chủ ↗</a></div></footer>`

const tripForm = document.querySelector('#trip-form')
const guestForm = document.querySelector('#guest-form')
tripForm.elements.checkin.min = today
tripForm.elements.checkout.min = addDays(today,1)
tripForm.elements.checkin.addEventListener('change', () => { tripForm.elements.checkout.min = addDays(tripForm.elements.checkin.value || today,1) })
function renderAges() {
  const count = Number(tripForm.elements.children.value)
  const wrap = document.querySelector('#children-ages')
  wrap.innerHTML = count ? '<p>Tuổi trẻ em tại ngày nhận phòng</p>' + Array.from({length:count},(_,i) => `<label><span>Trẻ ${i+1}</span><select data-age="${i}">${Array.from({length:18},(_,age) => `<option value="${age}" ${(state.ages[i] ?? 8)===age?'selected':''}>${age} tuổi</option>`).join('')}</select></label>`).join('') : ''
}
function renderRooms() {
  document.querySelector('#room-list').innerHTML = rooms.map((room,i) => `<article class="room-card ${state.room===i?'selected':''}"><img src="${room.image}" alt="Phòng ${room.name}"><div class="room-copy"><div class="room-top"><span class="room-type">LIFROOMS COLLECTION</span>${i===1?'<span class="popular">Được yêu thích</span>':''}</div><h3>${room.name}</h3><p>${room.subtitle}</p><div class="room-facts"><span>◫ ${room.size} m²</span><span>♢ ${room.beds}</span><span>♙ Tối đa ${room.people} khách</span></div><div class="room-perks">${room.perks.map(perk=>`<span>✓ ${perk}</span>`).join('')}</div></div><div class="room-action"><small>Giá minh họa từ</small><strong>${money(room.price)}</strong><span>/ phòng / đêm</span><button type="button" data-room="${i}" aria-pressed="${state.room===i}">${state.room===i?'Đã chọn ✓':'Chọn phòng'}</button></div></article>`).join('')
}
function renderSummary() {
  const hotel = hotels[state.hotel]
  const nights = daysBetween(state.checkin,state.checkout)
  document.querySelector('#property-name').textContent = hotel.name
  document.querySelector('#property-address').textContent = '⌖ ' + hotel.address
  document.querySelector('#property-main-image').src = hotel.image
  document.querySelector('#property-main-image').alt = hotel.name
  document.querySelector('#summary-image').src = hotel.image
  document.querySelector('#summary-image').alt = hotel.name
  document.querySelector('#summary-hotel').textContent = hotel.name
  document.querySelector('#summary-address').textContent = hotel.address
  document.querySelector('#summary-checkin').textContent = dateLabel(state.checkin)
  document.querySelector('#summary-checkout').textContent = dateLabel(state.checkout)
  document.querySelector('#summary-nights').textContent = nights + ' đêm'
  document.querySelector('#summary-guests').textContent = state.adults + ' người lớn' + (state.children ? ', ' + state.children + ' trẻ em' : '')
  const room = state.room === null ? null : rooms[state.room]
  document.querySelector('#summary-room').innerHTML = room ? `<span>Hạng phòng đã chọn</span><strong>${room.name}</strong>` : '<span>Chưa chọn phòng</span><strong>Chọn một hạng phòng bên trái</strong>'
  const subtotal = room ? room.price * nights : 0
  document.querySelector('#price-lines').innerHTML = room ? `<div><span>${money(room.price)} × ${nights} đêm</span><strong>${money(subtotal)}</strong></div><div><span>Thuế & phí minh họa (8%)</span><strong>${money(Math.round(subtotal * .08))}</strong></div>` : '<div><span>Giá sẽ hiển thị sau khi chọn phòng</span></div>'
  document.querySelector('#summary-total').textContent = room ? money(Math.round(subtotal * 1.08)) : '—'
  document.querySelector('#step-info').classList.toggle('active', room !== null)
}
function updateUrl() {
  const next = new URL(location.href)
  next.searchParams.set('hotel', String(state.hotel))
  next.searchParams.delete('hotel_id')
  next.searchParams.set('adults', String(state.adults))
  next.searchParams.set('date', state.checkin)
  next.searchParams.set('nights', String(daysBetween(state.checkin,state.checkout)))
  if (state.ages.length) next.searchParams.set('children-age', state.ages.join(';'))
  else next.searchParams.delete('children-age')
  history.replaceState(null,'',next)
}
tripForm.elements.children.addEventListener('change', () => {
  const old = [...document.querySelectorAll('[data-age]')].map(el => Number(el.value))
  state.ages = old
  renderAges()
})
tripForm.addEventListener('submit', e => {
  e.preventDefault()
  const data = new FormData(tripForm)
  const checkin = data.get('checkin'), checkout = data.get('checkout')
  const message = document.querySelector('#trip-message')
  if (daysBetween(checkin,checkout) < 1) { message.textContent = 'Ngày trả phòng cần sau ngày nhận phòng.'; return }
  if (daysBetween(checkin,checkout) > 60) { message.textContent = 'Vui lòng chọn tối đa 60 đêm cho một lượt tìm kiếm.'; return }
  message.textContent = ''
  state.hotel = Number(data.get('hotel'))
  state.checkin = checkin
  state.checkout = checkout
  state.adults = Number(data.get('adults'))
  state.children = Number(data.get('children'))
  state.ages = [...document.querySelectorAll('[data-age]')].map(el => Number(el.value))
  if (state.room !== null && rooms[state.room].people < state.adults + state.children) state.room = null
  renderRooms(); renderSummary(); updateUrl()
  message.textContent = 'Đã cập nhật thông tin chuyến đi.'
})
document.querySelector('#room-list').addEventListener('click', e => {
  const button = e.target.closest('[data-room]')
  if (!button) return
  const index = Number(button.dataset.room)
  if (rooms[index].people < state.adults + state.children) {
    button.textContent = 'Không đủ chỗ cho số khách đã chọn'
    return
  }
  state.room = index
  renderRooms(); renderSummary()
  document.querySelector('#guest-section').scrollIntoView({behavior:'smooth',block:'start'})
})
function showConfirmation() {
  if (state.room === null) { document.querySelector('#rooms').scrollIntoView({behavior:'smooth'}); document.querySelector('#form-message').textContent = 'Vui lòng chọn hạng phòng trước.'; return }
  if (!guestForm.reportValidity()) { guestForm.scrollIntoView({behavior:'smooth',block:'center'}); return }
  const data = new FormData(guestForm)
  const name = String(data.get('name')).trim()
  if (!name) { document.querySelector('#form-message').textContent = 'Vui lòng nhập họ và tên.'; return }
  document.querySelector('#form-message').textContent = ''
  document.querySelector('#confirmation-copy').textContent = `Cảm ơn ${name}. Đây là bản xem trước thông tin cho chuyến đi của bạn.`
  document.querySelector('#confirmation-details').innerHTML = `<strong>${hotels[state.hotel].name} · ${rooms[state.room].name}</strong><span>${dateLabel(state.checkin)} — ${dateLabel(state.checkout)} · ${daysBetween(state.checkin,state.checkout)} đêm</span><span>${state.adults} người lớn${state.children ? `, ${state.children} trẻ em` : ''}</span><strong>Tổng minh họa: ${money(Math.round(rooms[state.room].price * daysBetween(state.checkin,state.checkout) * 1.08))}</strong>`
  document.querySelector('#confirmation').hidden = false
  document.body.style.overflow = 'hidden'
  document.querySelector('#step-done').classList.add('active')
  document.querySelector('#confirmation-close').focus()
}
guestForm.addEventListener('submit', e => { e.preventDefault(); showConfirmation() })
document.querySelector('#summary-submit').addEventListener('click', showConfirmation)
function closeConfirmation() { document.querySelector('#confirmation').hidden = true; document.body.style.overflow = ''; document.querySelector('#step-done').classList.remove('active') }
document.querySelector('#confirmation-close').addEventListener('click',closeConfirmation)
document.querySelector('.confirmation-backdrop').addEventListener('click',closeConfirmation)
document.addEventListener('keydown',e => { if (e.key === 'Escape' && !document.querySelector('#confirmation').hidden) closeConfirmation() })
renderAges(); renderRooms(); renderSummary()
