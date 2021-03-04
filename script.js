
//  menamgkap dan memanipulasi class row dari yang ada di html
const row = document.querySelector('.row');


//  ==== Menangkap class cari yang ada di file html dan memberi event

// ketika tombol cari di klik maka lakukan fungsi berikut

const cari = document.querySelector('.cari');
cari.addEventListener('click', function () {

    const inputan = document.querySelector('.inputan');

    // menangkap form input yang diisi user
    const inputanUser = inputan.value;

    // jika inputan user sama dengan keyboard maka isi class row dengan memanggil fungsi showKey() 
    if (inputanUser == "keyboard") {

        row.innerHTML = showKey();

    }
    else {
        row.innerHTML = showMouse();
    }
});



// Membuat fungsi yang akan di tampilkan ketika data dari mouse diopanggil ... menggunakan template literal

function showKey() {
    return `  <div class="col-md-3">
    <div class="card key">
        <img src="img/key1.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Keyboard Logitech</h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 100.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card key">
        <img src="img/key2.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Keyboard MSI</h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 200.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card key">
        <img src="img/key3.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Keyboard Advance</h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 300.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card key">
        <img src="img/key4.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Keyboard HP</h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 10.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>`
}


// Membuat fungsi yang akan di tampilkan ketika data dari mouse diopanggil ..... menggunakan template literal


function showMouse() {
    return `<div class="col-md-3">
    <div class="card mousee">
        <img src="img/mouse1.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 20.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card mousee">
        <img src="img/mouse2.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 30.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card mousee">
        <img src="img/mouse3.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 40.000</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>
<div class="col-md-3">
    <div class="card mousee">
        <img src="img/mouse4.jpg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title"></h5>
            <h6 class="card-subtitle mb-2 text-muted">Rp 100.000</h6>
            <p></p>
            <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal"
                data-target="#movieDetailModal">Tumbas Sekarang</a>
        </div>
    </div>
</div>`;
}
