//GEOLOCATION
//-Dokumentation: https://developer.mozilla.org/de/docs/Web/API/Geolocation_API
//--Überprüfen der Verfügbarkeit des Navigator-Geolocation-Dienstes
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
} else {
    //--- Falls ihre Webbrowser kein Geolocation unterstützen (https://caniuse.com/?search=navigator.geolocation)
    alert('Ihr Webbrowser erlaubt keine Geolokalisierung');
};

//--Mit der Funktion "success" rufen wir die Geolocation-Daten auf und drucken sie übersetzt in eine Warnung
function success(geolocationPosition) {
    //---Wir deklarieren jede der Daten
    let coords = geolocationPosition.coords;
    let latitude = coords.latitude;
    let longitude = coords.longitude;
    let altitude = coords.altitude;
    let accuracy = coords.accuracy;
    let altitudeAccuracy = coords.altitudeAccuracy;
    let heading = coords.heading;
    let speed = coords.speed;
    //---Wir drucken die Informationen, übersetzt in eine alert()
    alert('Breitengrad: '+latitude+
    '\nLängerngrad: '+ longitude+
    '\nHöhe: '+ altitude+
    '\nRichtigkeit: '+ accuracy+
    '\nHöhengenauigkeit: '+altitudeAccuracy+
    '\nÜberschrift: '+heading+
    '\nGeschwindigkeit: '+speed);
};

//--Falls die Bedingungen zum Ausführen der Funktion "success" nicht erfüllt sind, wird die Funktion "error" ausgeführt
function error(err) {
    //---Übersetzung der Fehlermeldung
    let fehler = err.message
    fehler = 'Sie haben den Geolocation-Dienst abgelehnt'
    alert(fehler);
    //---Hilfe für Entwickler und Administratoren
    console.log('Kann sein dass Sie einen Dienst oder Proxy verwenden \n(z. B. Live Server aus Ihrem Code-Editor) \nfür den ein SSL-Zertifikat erforderlich ist, \num auf den Geolocation-Dienst zuzugreifen.')
}
//ENDE GEOLOCATION