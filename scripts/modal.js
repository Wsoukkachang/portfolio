$(document).ready(function () {
  // MODAL
  var modalText = {
    omniverse: {
      title: "NVIDIA Omniverse Kondux Web3 Extension",
      tag: "NVIDIA OMNIVERSE WEB3 EXTENSTION.",
      detail:
        "A unique webpage for a Texas drone business. Developed completely from ground up.",
      link: "https://www.kondux.io",
      codeLink: "Private Repo",
    },
    dApp: {
      title: "Kondux Web3 dApp",
      tag: "KONDUX WEB3 DAPP.",
      detail:
        "A decentralized web3 application that helps creators use their 3D assets collaboratively while having true ownership of their digital assets.",
      link: "https://www.kondux.io/viewport",
      codeLink: "Private Repo",
    },
    tdi: {
      title: "Texas Drone Imaging",
      tag: "TDI WEBSITE.",
      detail:
        "A unique webpage for a Texas drone business. Developed completely from ground up.",
      link: "https://texasdroneimaging.net/",
      codeLink: "https://github.com/Wsoukkachang/TDI",
    },
    seentence: {
      title: "Seen-tence",
      tag: "VISUAL LEARNING TOOL.",
      detail:
        "A visual learning tool to help people understand what they are reading faster. - You can actually hear and see your sentences! WIP - hosted on Firebase.",
      link: "https://seentence2.web.app/",
      codeLink: "https://github.com/Wsoukkachang/Seentence",
    },
    covid19: {
      title: "Covid 19 Tracker",
      tag: "COVID 19 TRACKER.",
      detail:
        "Covid-19 tracker app -- that displays a map, graph, and line chart with the most up-to-date statistics for Covid-19 cases.",
      link: "https://covid19tracker-5585e.web.app",
      codeLink: "https://github.com/Wsoukkachang/covid19tracker",
    },
    incog: {
      title: "InCog",
      tag: "ANONYMOUS FEEDBACK APPLICATION.",
      detail:
        "App that allows users to give anonymous, constructive feedback to their colleagues.",
      link: "https://speakincog.com/landing",
      codeLink: "https://github.com/anonymous-team-feedback",
    },
    sonic: {
      title: "Sonic The Lambdog",
      tag: "TRAVERSAL GAME APPLICATION.",
      detail:
        "A game app where players can traverse a 100+ room maze and interact with other players in real time.",
      link: "https://zealous-poincare-b92bd3.netlify.app/",
      codeLink: "https://github.com/Sonic-BW",
    },
    droom: {
      title: "Droom",
      tag: "JOB SEEKER APPLICATION.",
      detail: "Think Tinder + LinkedIn.",
      link: "https://dreamindroom.netlify.app/",
      codeLink: "https://github.com/droom2019",
    },
    card: {
      title: "Super Six Card Game",
      tag: "MULITPLAYER CARD GAME.",
      detail: "A strategic multiplayer card game.",
    },
    space: {
      title: "Space Jumper",
      tag: "ONLINE INTERACTIVE GAME.",
      detail: "Simple, yet addicting game.",
      link: "https://www.newgrounds.com/portal/view/641062",
    },
    greys: {
      title: "The Greys",
      tag: "ONLINE INTERACTIVE GAME.",
      detail: " Play as The Greys and save as many humans as you can.",
      link: "hhttps://www.newgrounds.com/portal/view/640824",
    },
    shapes: {
      title: "Ancient Shapes",
      tag: "SHAPE BUILDING INTERACTIVE GAME.",
      detail:
        "Construct barriers and create weapons to save yourself from alien forces.",
      link: "https://www.newgrounds.com/portal/view/640245",
    },
    kratos: {
      title: "Kratos Electrical Contractor LLC",
      tag: "KRATOS ELECTRICAL CONTRACTOR LLC WEBSITE.",
      detail:
        "A unique webpage for a Texas electrical business. Developed completely from ground up.",
      link: "https://kratoselectrical.com/",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);

    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    if (modalText[id].codeLink)
      $("#modal .buttonCode")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].codeLink);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        backgroundSize: "cover",
      });
    });
  }
});
