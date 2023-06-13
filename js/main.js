

//password......................................//
function validatePassword() {
  var password = document.getElementById('passwordInput').value;
  let popup = document.getElementById('popup');
  var button = document.getElementById('click');
  var center = document.getElementById('center');
  var notif1 = document.querySelector(".notif1");

  if (password === "Kitagaboetsnove") {
    popup.classList.remove("popup");
    center.style.display = 'none';
    button.style.display = 'inline-block';
    notif1.style.transform = 'translateX(-100vw)';
  } else {
    Swal.fire(
      'Yahhh salah',
      'Coba lagi masukin kode yang bener',
      'jika kamu memang my best friend'
    )
  }
  play()
}

function play() {
  var audio = document.querySelector(".audio");
  audio.play();
}

var ucapan = "";
var noWhatsapp = "";
var pesanWhatsapp = "";
var boxComments2 = document.getElementById('notif2');
var boxComments = document.getElementById('notif1');

boxComments.addEventListener('click', async function balas() {
  var { value: nama } = await Swal.fire({
    imageUrl: "https://dekatutorial.github.io/stiker_mylove.gif",
    title: "Hai, Kamu temanku yang mana nih. Nama kamu siapa?",
    input: "text",
    confirmButtonText: "Kirirm",
  }).then(({ value }) => {
    if (value) {
      boxComments2.style.transform = 'translate(-100vw)';
      boxComments.style.transform = 'translateX(0)';
    }
    return { value };
  });

  if (nama) {
    await Swal.fire({
        title: 'Terima kasih!',
        text: 'Nama kamu adalah ' + nama,
        icon: 'success',
        confirmButtonText: 'OK'
      });    

    document.querySelector(".hilang1").style.display = "none";
    txt = "Halo " + nama + ".disini aku punya sesuatu untukmu " + nama + ". sebelum itu aku ucapkan terimakasih karena datang dihidupku, menjadi teman dan sahabat. juga terimakasih telah menemaniku, membuatku tertawa. sedih dan candaan itu adalah sebuah pengalaman yang tidak terlupakan untukku.";
    typeWriter(mulaitanya);
    button.style.display = 'inline-block';
  } else {
    await Swal.fire({
      imageUrl: "https://dekatutorial.github.io/stiker2_mylove.gif",
      imageHeight: 120,
      confirmButtonText: "iya deh",
      title: "kenapa gk diisi kamu jahat isi dong",
    });
    balas();
  }
});


  
  var i = 0;
  var speed = 120;
  var txt = "";
  
function typeWriter(callback) {
  var isiElement = document.querySelector(".isi");
  if (i < txt.length) {
    isiElement.textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, callback);
  } else {
    document.querySelector(".notif2").style.animation = "kelip 1200ms infinite ease";
    if (typeof callback === 'function') {
      callback();
    }
  }
}

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
});
const swalsy = Swal.mixin({
  confirmButtonText: "iya",
  allowOutsideClick: false,
});
const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
});

function mulaitanya() {
  swals.fire({
    title: 'Halo kamu bisa klik tombol dibawah ya',
    imageUrl: "https://dekatutorial.github.io/stiker_mylove.gif",
    imageWidth: 120,
    imageHeight: 120,
    confirmButtonText: "Okay",
    allowOutsideClick: false,
    showCancelButton: false,
  }).then(({ isConfirmed }) => {
    if (isConfirmed) {
        document.querySelector(".notif2").style.display = "none";
      kuis();
    }
  });
}

async function kuis() {
  await swalst.fire({
    title: "Apa Kabarmu? sudah 1 bulan lebih kita berpisah :(",
    imageUrl: "https://i.postimg.cc/k4fzW1Rt/giphy-9.gif",
    imageWidth: 250,
    imageHeight: 280,
  })
  await swalst.fire({
    title: "Aku kangen dimana kita bisa canda tawa di sekolah dan bermain bersama",
    imageUrl: "https://i.postimg.cc/TwRJqTnt/nari.gif",
    imageWidth: 250,
    imageHeight: 280,
  })
  await swalst.fire({
    title: "Jaga kesehatanmu ya kawan, jangan lupa makan, minum dengan baik. semoga nanti kita bisa bertemu tiap tahun untuk berkumpul bersama-sama dan menceritakan hidup barunya. ditunggu yah",
    imageUrl: "https://i.postimg.cc/d16HygwY/giphy.gif",
    imageWidth: 250,
    imageHeight: 280,
  })
  await swalst.fire({
    title: "Aku gk sabar ngumpul lagiiiii. sorry aku gk pandai cari gifnya heheheheh",
    imageUrl: "https://i.postimg.cc/fLGDS3KX/giphy-8.gif",
    imageWidth: 250,
    imageHeight: 280,
  })
  Swal.fire({
    title: 'Apa Kamu suka',
    icon: 'question',
    text: 'jika iya, klik suka disana ada hadiah untukmu, jika kamu klik tidak kamu berhenti jadi temanku aja',
    confirmButtonText: 'Suka',
    cancelButtonText: 'Tidak',
    showCancelButton: true,
    showCloseButton: true
  }).then(({ isConfirmed }) => {
    if(isConfirmed) {
      document.getElementById("wrapper").style.display = "block";
      document.getElementById("btn").style.display = "block";
      flipbook()
    }
  });
  
  showDiv()
}

function flipbook() {
  var flip = document.getElementById("wrapper");
  var btn = document.getElementById("btn");
  if(flip){
    flip.style.display = "block";
    btn.style.display = "block";
  }
}


