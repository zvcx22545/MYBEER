const menuLink = document.querySelectorAll('.menu-item');

menuLink.forEach(menusLink => {
    menusLink.addEventListener('click',() => 
    {
        document.querySelector('.active')?.classList.remove('active');
        menusLink.classList.add('active');
    })
});


const showStatuses = document.querySelectorAll('.show-status');

// วนลูปผ่าน show-statuses ทั้งหมดเพื่อตรวจสอบและทำการเปลี่ยนแปลงสีพื้นหลัง
showStatuses.forEach(showStatus => {
    const statusText = showStatus.textContent.trim();

    // ตรวจสอบสถานะเพื่อกำหนดสีพื้นหลัง
    if (statusText === 'ชำระเงินแล้ว' || statusText === 'จัดส่งสำเร็จ') {
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ status เป็น #CBF4CC
        showStatus.parentElement.style.backgroundColor = '#CBF4CC';

        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#1FD831';
    }
    if (statusText === 'ชำระเงินแล้ว') {
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ status เป็น #CBF4CC
        showStatus.parentElement.style.backgroundColor = '#CBF4CC';

        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#1FD831';
    }
    else if (statusText === 'จัดส่งสำเร็จ') {
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ status เป็น #CBF4CC
        showStatus.parentElement.style.backgroundColor = '#CBF4CC';
        showStatus.parentElement.style.justifyContent = 'flex-start';
        showStatus.parentElement.style.paddingLeft = '13px';

        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#1FD831';
    }
    else if (statusText === 'รอชำระเงิน') {
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ status เป็น #CBF4CC
        showStatus.parentElement.style.backgroundColor = '#f4ebcb';
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#F1BC00';
    }
    else if (statusText === 'ยังไม่ดำเนินการ') {
        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ status เป็น #CBF4CC
        showStatus.parentElement.style.backgroundColor = 'var(--grey-100, #EEE)';

        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#B3B7BA';
    }
    else
    {
        showStatus.textContent='ERROR'
        showStatus.parentElement.style.backgroundColor = '#f4ebcb';
      

        // หากเงื่อนไขตรงกันให้เปลี่ยนสีพื้นหลังของ circle-status เป็น #1FD831
        showStatus.parentElement.querySelector('.circle-status').style.backgroundColor = '#ff0000';
    }
});