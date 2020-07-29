
var TextReceiver = (function() {
    Quiet.init({
        profilesPrefix: "/",
        memoryInitializerPrefix: "/",
        libfecPrefix: "/"
    });

    var target;
    var content = new ArrayBuffer(0);
    var warningbox;
    var button = document.getElementById("textbox")

    function onReceive(recvPayload) {
        content = Quiet.mergeab(content, recvPayload);
        target.textContent = Quiet.ab2str(content);
        // warningbox.classList.add("hidden");
    };


    

    function onReceiverCreateFail(reason) {
        // console.log("failed to create quiet receiver: " + reason);
        warningbox.classList.remove("hidden");
        // warningbox.textContent = "Sorry, it looks like this example is not supported by your browser. Please give permission to use the microphone or try again in Google Chrome or Microsoft Edge."
    };

    function onReceiveFail(num_fails) {
        warningbox.classList.remove("hidden");
        // warningbox.textContent = "We didn't quite get that. It looks like you tried to transmit something. You may need to move the transmitter closer to the receiver and set the volume to 50%."
    };

    function onQuietReady() {
        var profilename = document.querySelector('[data-quiet-profile-name]').getAttribute('data-quiet-profile-name');
        Quiet.receiver({profile: profilename,
             onReceive: onReceive,
             onCreateFail: onReceiverCreateFail,
             onReceiveFail: onReceiveFail
        });
    };

    function onQuietFail(reason) {
        // console.log("quiet failed to initialize: " + reason);
        warningbox.classList.remove("hidden");
        // warningbox.textContent = "Sorry, it looks like there was a problem with this example (" + reason + ")";
    };

    function onDOMLoad() {
        target = document.querySelector('[data-quiet-receive-text-target]');
        warningbox = document.querySelector('[data-quiet-warning]');
        Quiet.addReadyCallback(onQuietReady, onQuietFail);

    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();

// var ele = document.getElementById("id1");
// ele.addEventListener("mouseover", func, false);

function func(){
    alert("something")
}
  function myclick() {
    var button = document.getElementById("textbox");
        alert("Receiving frequency input and redirecting..");
        button.textContent = "This is Qhacks"
        // window.open("https://goo.gl/maps/qiLGUhKQLevF6hr26")
        // // window.open("newpage.html")
        // window.open("http://www.tapheartrate.com/")
        var w1 = window.open("https://goo.gl/maps/qiLGUhKQLevF6hr26", '1');
        var w2 = window.open("http://www.tapheartrate.com/", '2');
        Quiet.funcresume();
    };