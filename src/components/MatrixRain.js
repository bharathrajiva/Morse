import React, { useRef, useEffect } from 'react';

function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var matrix = "अ आ इ ई उ ऊ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ ० १ २ ३ ४ ५ ६ ७ ८ ९ అ ఆ ఇ ఈ ఉ ఊ ఋ ఎ ఏ ఐ ఒ ఓ ఔ క ఖ గ ఘ చ ఛ జ ఝ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ ళ క్ష జ్ఞ్యొ జ్ఞ్యా జ్ఞ్యి జ్ఞ్యీ జ్ఞ్యు జ్ఞ్యూ ౦ ౧ ౨ ౩ ౪ ౫ ౬ ౭ ౮ ౯അ ആ ഇ ഈ ഉ ഊ ഋ എ ഏ ഐ ഒ ഓ ഔ ക ഖ ഗ ഘ ച ഛ ജ ഝ ഞ ട ഠ ഡ ഢ ണ ത ഥ ദ ധ ന പ ഫ ബ ഭ മ യ ര ല വ ശ ഷ സ ഹ ള ൦ ൧ ൨ ൩ ൪ ൫ ൬ ൭ ൮ ൯अ आ इ ई उ ऊ ऋ ए ऐ ओ औ क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श ष स ह क्ष त्र ज्ञ ० १ २ ३ ४ ५ ६ ७ ८ ९অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ চ ছ জ ঝ ট ঠ ড ঢ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ ড় ঢ় য় ০ ১ ২ ৩ ৪ ৫ ৬ அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ ங ஙா ஙி ஙீ ஙு ஙூ ஙெ ஙே ஙை ஙொ ஙோ ஙௌ ச சா சி சீ சு சூ செ சே சை சொ சோ சௌ ஞ ஞா ஞி ஞீ ஞு ஞூ ஞெ ஞே ஞை ஞொ ஞோ ஞௌ ட டா டி டீ டு டூ டெ டே டை டொ டோ டௌ ண ணா ணி ணீ ணு ணூ ணெ ணே ணை ணொ ணோ ணௌ த தா தி தீ து தூ தெ தே தை தொ தோ தௌ ந நா நி நீ நு நூ நெ நே நை நொ நோ நௌ ப பா பி பீ பு பூ பெ பே பை பொ போ பௌ ம மா மி மீ மு மூ மெ மே மை மொ மோ மௌ ய யா யி யீ யு யூ யெ யே யை யொ யோ யௌ ர ரா ரி ரீ ரு ரூ ரெ ரே ரை ரொ ரோ ரௌ ல லா லி லீ லு லூ லெ லே லை லொ லோ லௌ வ வா வி வீ வு வூ வெ வே வை வொ வோ வௌ ழ ழா ழி ழீ ழு ழூ ழெ ழே ழை ழொ ழோ ழௌ ள ளா ளி ளீ ளு ளூ ளெ ளே ளை ளொ ளோ ளௌ ற றா றி றீ று றூ றெ @#$%^&*()*&^%+-/~{[|`]}";
    matrix = matrix.split("");
    var font_size = 14;
    var columns = canvas.width / font_size;
    var drops = [];

    for(var x = 0; x < columns; x++)
      drops[x] = 1;

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#37dc69";
      ctx.font = font_size + "px arial";

      for(var i = 0; i < drops.length; i++) {
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        ctx.fillText(text, i*font_size, drops[i]*font_size);
        if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;
        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 50);

    return () => clearInterval(intervalId);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />;
}

export default MatrixRain;
