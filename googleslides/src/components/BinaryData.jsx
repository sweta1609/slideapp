import React,{useEffect,useState} from 'react'
import ImageFilter from 'react-image-filter';
import ProcessImage from 'react-imgpro';

function BinaryData() {
  const [state, setState] = useState({
    src: '',
    err: null
  });

    const binaryImageData = "ÿØÿà\u0000\u0010JFIF\u0000\u0001\u0001\u0000\u0000\u0001\u0000\u0001\u0000\u0000ÿâ\u0002(ICC_PROFILE\u0000\u0001\u0001\u0000\u0000\u0002\u0018\u0000\u0000\u0000\u0000\u00040\u0000\u0000mntrRGB XYZ \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000acsp\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\tdesc\u0000\u0000\u0000ð\u0000\u0000\u0000trXYZ\u0000\u0000\u0001d\u0000\u0000\u0000\u0014gXYZ\u0000\u0000\u0001x\u0000\u0000\u0000\u0014bXYZ\u0000\u0000\u0001\u0000\u0000\u0000\u0014rTRC\u0000\u0000\u0001 \u0000\u0000\u0000(gTRC\u0000\u0000\u0001 \u0000\u0000\u0000(bTRC\u0000\u0000\u0001 \u0000\u0000\u0000(wtpt\u0000\u0000\u0001È\u0000\u0000\u0000\u0014cprt\u0000\u0000\u0001Ü\u0000\u0000\u0000<mluc\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\fenUS\u0000\u0000\u0000X\u0000\u0000\u0000\u001c\u0000s\u0000R\u0000G\u0000B\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000XYZ \u0000\u0000\u0000\u0000\u0000\u0000o¢\u0000\u00008õ\u0000\u0000\u0003XYZ \u0000\u0000\u0000\u0000\u0000\u0000b\u0000\u0000·\u0000\u0000\u0018ÚXYZ \u0000\u0000\u0000\u0000\u0000\u0000$ \u0000\u0000\u000f\u0000\u0000¶Ïpara\u0000\u0000\u0000\u0000\u0000\u0004\u0000\u0000\u0000\u0002ff\u0000\u0000ò§\u0000\u0000\rY\u0000\u0000\u0013Ð\u0000\u0000\n[\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000XYZ \u0000\u0000\u0000\u0000\u0000\u0000öÖ\u0000\u0001\u0000\u0000\u0000\u0000Ó-mluc\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\fenUS\u0000\u0000\u0000 \u0000\u0000\u0000\u001c\u0000G\u0000o\u0000o\u0000g\u0000l\u0000e\u0000 \u0000I\u0000n\u0000c\u0000.\u0000 \u00002\u00000\u00001\u00006ÿÛ\u0000C\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001ÿÛ\u0000C\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001ÿÀ\u0000\u0011\b\u0000û\u0000n\u0003\u0001\"\u0000\u0002\u0011\u0001\u0003\u0011\u0001ÿÄ\u0000\u001e\u0000\u0001\u0000\u0002\u0003\u0001\u0001\u0001\u0001\u0001\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0007\b\u0005\u0006\t\u0004\n\u0003\u0002\u0001ÿÄ\u00007\u0010\u0000\u0002\u0002\u0002\u0003\u0000\u0000\u0002\u0005\t\t\u0001\u0001\u0000\u0000\u0000\u0005\u0006\u0004\u0007\u0002\u0003\u0000\u0001\b\u0015Ó\u0013\u0016T¤\t\u0011\u0012\u0014\u0018UVvÖ\u0017!567t´µ¶\"#ÿÄ\u0000\u001b\u0001\u0001\u0001\u0001\u0001\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0002\u0001\u0003\u0004\u0006\u0007\u0005ÿÄ\u00006\u0011\u0000\u0002\u0001\u0003\u0002\u0003\u0006\u0004\u0004\u0006\u0003\u0001\u0000\u0000\u0000\u0000\u0001\u0011\u0002\u0000!1\u0012A\u0003Qa\u0004\u0013\"2RðqÓ\u0015\u0016Br¡±ÁÑ\u0005C³ñÿÚ\u0000\f\u0003\u0001\u0000\u0002\u0011\u0003\u0011\u0000?\u0000úã9õ\nù½8ã)^\u001dâRÿ\u0000Øÿ\u0000Sîxuÿ\u0000Kÿ\u0000b;þAN{¹\u001c?)þ~'þ«âyòpÿ\u0000ó8ã]E8ã)N8ãS8âã8¥8ã)^\u001dâRÿ\u0000Øÿ\u0000SÕü¤[ãôK\u0014®a¼ïcz`RÕë³y©k\rÖÖU)AÄÔYúÒ¦ÆÝ\u0002\u001e\u0004¡K\u001e\t\tPÇé_£=ô«_ø¿ö#¿ä\u0014æ)µ9Eù|Ò²ã¢©}xi,²Ú\fc\u001aùMZöá¿^¢!E:n½{µëÝ\u0012cmÇ\u001dºðÙ]g=õÄÃ_\u000eQ\u00059Ï!¸²&$o\u0019\u0001¦C5×V$e{C\u0010øQ\f\u001dlu\u0002¸'eõBUÌ>qä÷\u0006kIJ»÷»Ìkï<ö;Î\u000eæ§ÕU)É £á¹bFÿ\u0000Ô&æ,AöñÁ\u001d!¢4È[¶î\u001b«ô®}Ëé:ÌçèjvÌ3mxe×ÒÑó<º¡æ\u001b0k\u0002ð`JÇÛY(lÑ¹WóYr'\u0014éµs©\u0004\ri\u00118øw\bm5P\u0005\u001a\u0018=S[\t\u0011]ØÁ_\u001a±\u0000j)íÑåÄÚm:\fQz¢¬\u0017Û\u0014øÛ\t\u0004Õ\u0006nqæËÓîõÉÝ`\u0014Í>©Õz¦¶[Ùaw#·í\u0011UÃæñÜ¬dá+·\fÇ\u000b7rp/\u0019\u001dîoÓc*N;?K­ûzËìü@N 7Ó\rB#Ã\u0001aªþR\u0003°\u0007T@6®ô\u0010\u0006\u0006d+ÏI%HÃl«\u0014'\u0005}ïéª kí1úUOÑû9:§Ì,ÚÂ\u0001E\u0015]hî6\bÏ'¿î°JBÛ!\t¤\u0010[¡¬j%\u0004Ì{g¶Oõc\u001dè?É*»¾øÈ\\7w;jªHp.¬A,¬20¢zdbDfhÛPÛS#(\u0006\u001cB\u0003?<hf]\u0004iïN¨]GÕØ({  \"Ï« Ñõ\u0004:Ì¬îÉ®âVqÑI\u0012ï-9öBz¸/ÌÞqôeÜ¹\u0003öHï-\u001arúOÏ¯\u000eñØ¥UuäáµÜêá\ne~\u0017`ÁÑe'¯HN\u0013µ~vvXÜ;06\u0004'\u001a1\u0011\u0019Å«!³£è\u000f½25kÙp83ø¦B|9A\u0013\"\u0001D²u\u0010\u0001r±:\u0004\u0006wÐ\u0007cÃ\u00110âFd\u0010NÕ°\u000eÑº@I$üÒ³ìKÞðü\u001e»%\u0012ý!GùZÈÑ/\\:z<±3Eg\u001d5ãü!ªÐh¦µoë>ðÕÝ\u001a°Ã.÷á¬Pö÷£»(2M¶ÌalÚÞ¾ªÉù\u001aZv:\f]\u0016\u0006À¦ãÙ½:ö9Î07rXN]_^%\u0005®>±EåÔnûí>Ú¥ß+\u0019ÛêêëtÜl\u001d6Ö36¤­l«\u001cn!£ÙÈÌg{º°t\bÃ\u0001Z\\úÏë\u001e¡¸c\u0007\u0002XÅÇ­]:)ê+[\u000bäZ¶¹ðÜ;pvÇ=\t\u000b:ZÙÄÉ×¯Ll,ZÆb\\Ðé\u001aujÕº\t)cm×¯^\u0019êË\u001c1ë¬gâÄÞ)\u0003#âgHA(tÀÅ\u001f\u000fÀ­<~\u0019\u000bº\b\u0002\u0000±M$\u0003)j`XE¢M|÷N¾ýSfùÊÂO´ï©NïÉ!lzwnPk\nÅd«2ÑÍ¬\u000eÜ\u001doèI\u0000°\u0014\u0002Õº|NÉÜFIty\tó4è|ãô+UÞü#\n¸õ\u0011ÔÙ0ü+ãY¥\u0003 Tne\u0019¢É`|5w½F\u0016å(\u000e\u001c©Í¡;Ü8\u0007Ggö*\u0006e\u000be?Q».¨d/0µ]p#0i2«@\u000bGXzât\u0012æ×âò/WcÒfJ\u001aL¥Hé\u0005\"D}\u001b¶ÀÏf­ycþ£ÓÕ\u001dc»dÚ¬®kÝûÂ\u0001·r:BÊí Î\"Lp]\u0000b`\u00120X!¹eÜ8³\u0011£N½ódìÚf¸J|C-+ø§©\u0000E§yHf­ZxñÓ1\u0018\u0001©¡¦\næ%\"\u0002HÔÇ.ïì®üTû÷µ?èþ?etâ§ß½©ÿ\u0000Góóÿ\u00000v\u001fGiý¾\u001fÝöGçþ\u0005Û}]õÏíûG£¤\\rîþÊé?ÅO¿{SþãöWIþ*}ûÚô\u001f;\u000f£´þß\u000fîûG£~\u0005Û}]õÏíûG£¢ÿ\u0000Ä¥ÿ\u0000±\u001dÿ\u0000 §=Ü·\u0011|Ú¹Àè/¬/Xt5iP·ë\u0010VïfþÍ\u0014sÜl´öôxa\u0013à\u001dmÃf=÷Ü¦ìÇ>ºÇN¿Ï²þÊé?ÅO¿{SþäÇþ{±D#\u000eÐÉ¼<NFcþÞR\u000f¨=\u001dKþ\u0013¶H%ÀòÆ7ó\u0018Æ'\u001c3f\néT]ßÙ]'ø©÷ïjÑü~Êé?ÅO¿{Sþå~`ì>Óû|?»í\u001e\u0002í¾®Ïúçöý£ÑÒ.9wetâ§ß½©ÿ\u0000Gñû+¤ÿ\u0000\u0015>ýíOú?Ì\u001dÑÚo÷}£Ñ¿\u0002í¾®Ïúçöý£ÑÒ.9wetâ§ß½©ÿ\u0000Gñû+¤ÿ\u0000\u0015>ýíOú?Ì\u001dÑÚo÷}£Ñ¿\u0002í¾®Ïúçöý£ÑÒ.9wetâ§ß½©ÿ\u0000Gñû+¤ÿ\u0000\u0015>ýíOú?Ì\u001dÑÚo÷}£Ñ¿\u0002í¾®Ïúçöý£ÑÙ¾8ã^ßTÏògßãD2§Ú6]NÃ[SvÝ(õZz\nÁÒE\u0012êÇRB;´9#0\u0000üs\u0011%ä©=e|Ðc¢ôÁ¬6ó\"ÙºîTÕú,Ù²7Ë-9bT¹r·l&T\u0001 íß\"Fý¹g·~ýûsÏníÛsËfÍeye]÷ßìø¯f£9Öîâþ6`ª1$7ýtß«¶\b\u0004ø¿\u0000´\u000f×ÄÏ\u0013õÑs¡\u0011ô¿O\n\\i:õnÃ:0l ÃG\u001b§õaÂ Ä\u001b\u0002?ÒmÝô\u0010 Ç×\u0016.¦³ný¿E£V¼>vÝsý\u001fÒÙ³<ûË.õø@äd~¢?èÿ\u0000JÅâ{\u0010²rùbµ\u0001ßêò\u0015oÿ\u0000¡µy¦z)r;5LÅ\u0010­ÄvQ\u0019´[Ec-\u001dÁDÈúáLf7qÞº:m\u0015tdàÅCOÀ°\u001ai\u0002`H/¦\u00198{ïõAÃù\n·ÿ\u0000ÐÚ¼×ï*.´ô}pZ¦·D8nx\u0002/=>×$·NW:=\u000eýM5«:d?\u001d\u00148½PGÓºD=\u001f¬ëÝ¯\u000fÐå\u0012¥\u0013p\f°\u0001#Ã\u001c\u0003bz\u001bV\\Ä¤Kd\u0019UÉÔí6«\u0018O/T§ìF,Q~ö\u0015ØN¿ÚÁkÙËÞïÌ\n>p²,JÁ\t¦ãÚÁ\u0016ó\r£ê\\J\u001eDÜ#Û\u0003ë-àP\u001bÌA\u0011F\u000eÒ\fMI\u0006Ûfz\u000fÒ¥L¡ÙÞËòõ$OYí\u0015Ýµè»y\u0003Ôµ3çÅ\u001eÑÏ.2½µ\nEª£o/\t¦fúÇ|YNö½¿\fð\u0019¤Äô{hYè}×'pº\u001béu\u001fb\u00062õêoQ¾ØéÎ¢ÅI\u0007\býwo¹ÜmÖ^ ÓÊ\u000bÏZ\u0003ªÜY\u0010\f&>í'Ká7\fËào0³A§Çô¯b¦é¡\u0017Ù*y\u0015'¡ý\u001bH\u0013U\u0010é¶\u0006÷\fs3N[\b¥Ø\bµH\u0019\u0012S\u0011ÆyÆ\u001aÔDHÉ:vÙ\u0017ÞE©Ú!ÿ\u0000\u0016ï%Ä\u00136í\\ôI+\u001f\nó\u0015ü\u001d04\u0002L¤|³÷µ\nÕKôÛý\\T}*;Ç\u0016WªÚbÚÊµs¨Â~Ù¬Ê×ÉBæ\u0018_=µ\u001d6»2ã¹¦\u0003\u001e*õv\t5xî¿ª¶9¼\"^ÿ\u0000`Û\u0003mÏ(zÚe9ez*­a ê\u001b*ÈÐú_YÔðGI jÛ\u0010¢®KÀ«Æ­Z(RL\fÍ!ÏsòÛÅÙ¹hXdÆ\u001b-Ê3F×\fµpm {\u0013b\u0018Y(ÓbÇn°l6¦ysëv°/\tÄNØl-D¬6bcZV\u0001I¤¬ã!w\u0018ü¥M#p|HW³Qëwq\u001bK°U\u0018\u001bÃ~ºDoÅÕÛ\u0004L\u0002|_ÄDKZ\u0007ëâgËúè¹ÐÅú_§.4z·aãàQ ÆL¥vbIK¡AølUB\u0012rr`\u0000»\b\u0010ê\u0019W»\u0017®yúÌoSiZÍéåô\b¹ûë=i]7AÙ-uúQø MÕÜ­m©l YZ\tøA\u001d­³OßU\u000e\u00079¶ÃµàÌXU<=÷©>ªë0ö©È,öý0eÊ3F\u0011F°¾À\\\u001b\u0015ÀàøºôE×\u001a\tf\u001dDgÄÑhøi#^¼tiÇ\u001eµã\u000fÛ>;¢®£5\u0013¤+Ds\u0005:\bâÍnr°ôG¢(òë!\u0019£\u0007~\u0016¢T¥©_Ì%ñhkáâMgq\u0019{cA×\u001f½ýjÙ»\rò¸ÄJ!¥1M\u0014º2(òÛ\u001bl\u0006y\u0011aëëV­§]\r²9´\u0013Ï\u001eºîQ¦cÅÌNÙù÷M#n]çÜ\u0003\bÇpI6\u0003à\u0001\u0005õ,2~\u0002¶1\"DÀ\u0019% \u0019 x¾/bMl\\qÇ\"®¢¿¬¾Ûøx#¬¾Ûøx#>8®\fó?SYÏ¬¾Ûøx#¬¾Ûøx#Ú\u0000¨¢uú±KñX¨\u0000\u001b¦¨(Úa|Ú\u0007^M¯§ \u0013ëàÖ\u0004¬·\u0011h@ÆLõª+Ì\u0017ÝÍ¼hé'\u0004nþIªZ)/:Ö5í\u0012Ù\u0017\u0005ÜF\u0014\"Î\bUÅË4\u001añtÉLp\"YV²\u001cf%x¦JnÒf­,\n¶$<öw\u0017M!¤IJJÛ´]Õ·¬Õ&\\õ\u001elÙßlTÿ\u0000\r ¿nì:ºÛ\u001f\u001cðUMÙ¬aDê^ì6{Ç\bû÷}\u000fÿ\u0000¤xÝéÙ².¯Ñëè¶ËçËé¿6;WÖC_mü<OÈÒ\u0017ùùùA#þêÁäOê\u0014ézM;ü´á´øI°bL§C|0\f#\t\u000eA*,dyDÜD¼\u001bÐ1f]z>4©v\u001fdu%ëO\u0013\u000b¤9D^â\u0018\fÞ1ÀÜÞÃ|PH£sn·5hþ²\u001aûoáâ|>²\u001aûoáâ|p~\u0005\f-t_ªë»\bçÏB{Jà~ßåÃý\u000eß[W+s¼Õi¦hEý[w'l\u001a6Þ&2ÑE\\$e\u0003]Ôf \u0010¦êÂéû\u000fË\u0015È\u0016½\u0014û>Âöõ\u0013âºi Þói\u001bÆúÍ\\­mÝÚ¥c?\u0010+Ý@ªº=ãÖÉEQ«Î¢B%Áå|;\u001dwbÊD$ÄBGR7\u00161:®¸\u0015=ä»DÞG#M°ïªÖ}\u001d}\u0004ýd5ößÃÄù\u001c}d5ößÃÄù\u001cùÖü Mì\téïß6z@òw5øÁå +Ïr_ô]Ë\nèª@êÜbÆC®ÚQöBLV\u0016Æäm\\ËGDÝ­÷ì:ärLé»Ä½\u001eÐß¢öò\u0017° ¼Ò7*\u0012ýeIÚ¯uã[2²°+$¸Ú¢ÅÈ!ñ\u000b5¥Àaÿ\u0000áA?<S\u0012ïôDmÑÎ]!7c:îÜVÝßê´¤F6ð¢\u0001#S\u0012\u0005\fov\u0003¼7\u000eà5¨õ` RÙæºõ×Û\u000f\u0013äqõ×Û\u000f\u0013äsÞØAXbòU:î^1-ì5ãÇ³SÛ¡\u0000¨;½\u0011ç¡\u0006eÎ[\u001eZ*ÙùùÓñÄ\u0018D\n$ó\u001a\u0001H\u001b¬ágt÷È\u001aAy$\u0010°\u000b»|ëUªLvÜîÿ\u0000Õg>²\u001aûoáâ|>²\u001aûoáâ|`øæV³ÌýM8äÅðÁ¿» ýÒ?ËãáwAû¤ÅWvy~Ï³jjÑÔ­ê jýÝPU×\u0018\u0010Ä{0 %«_©ØB\u0005\u0017î6è]\u001a5¸IxpH÷\u000eLÎ§TÕ¤nÑô¿E·<2ÌWUkO«CE©kÄj¹$|² 'WJ@\u0012U Ê%'dÒ2a¯-\u000f\u0018&4ó6í7vl'fÍûòÙ·<³îa±j\u001ay^S½¶é[Õ©p¤F1¾ÆcXHW*nÎõC(û4ÁcÈ·®õÆÓ¶^\u001b7ìë¼5c_ÝÍ\u001c&pÂÖ¤.0¯\u001d\u001f\u0010¸3Àö,\u0018È¢\u001a0\u0000¢2\u0004ù±¶ë\u0012lMû£IÑ³\rÚvç¯<rï\\NÕ?ìéÝß!®WVù¯ô>P\u001c/óó/òGýÕÏ5XÖ·\u0002¬Ä[j¼F´RHï(u¦\u0001ÙVt¡²uÍ\u001d&bó(òb%o3N©p·oÈ²ukß£-{pÇ>¦x:cl°Ú\u0007g\u000e\u0017p¢¦!Í£õ(u®Tó>{zÏ­=lË½ÚÂÃ¼sÏ,0ú\u000e»×\u0019g·¼òmf×\f8¼\u0016QMQ^´\u0003K\\ðË«ÇiüßM<ÁÂûa\u0019\u000bWécô²¦ÊÑ£_éuú{:üýsdõ\u0005\u0004²ôÅ.µbÈÌÖÿ\u0000çÙµ:\u000fä¯*/!0U`<ËçÀu{aHÆÚ«pôÅp1\tÔ,#k]>\u0012Þã%\"k\u000f\bÓÈ/F\u0011cc«n\u0018èÕÖ\u001f«ç<µiÀQ\u0015gy®±×â2_C\u001aùNWmð\u0012@åMy\u0004QÀ¸F:ØµÀCCk\u000f¼!DÇ½=õ\u001bOXO[/¯3é«5^{®/U%¿¼zÓql±P5Õ»ÎvBðëU¶w<r\u001dX\u0017ï¼§cN¿<»××öá{y®¼VRy¹(ädì ààáa¡,«:æN6¹£pR`4b\u0010<CÝ¦\\\u001cCËÜ¸ÛuïÑÖÍYãg76FïRD|UêÜVb;$Á\u0007q³\\í¢Å«k((áë\u0018UÒ$:Õ{P\r +Øª+ñÑÁéT'\u0004Ò¾ êzà\u0004f¥³\u0002Æ\u0016\u0001®\u0010ý\u0018&:\fñÝF\u0012>Ý{9ÀaYÂZe\u000e-uY\u0000gÀ\u001c\u001f\u0010°SKDÝ\u0000¨s\u0002§é\u0004²pdo@|Ý\u001bâL¿ti:viÙ\u0019I\fõª8X¬¬(ê\u000b³J/y °\u0005ð²Í¶\u0016\u0005X<R¤D £)ÂcC/Õ¿9fK\u00108v3%èÓ³ôpb®ëÅò\r¯çRÑÕDëúbÎ\u0004Á¬¯Õýÿ\u0000þ¤\r\u001aß\bl=Ýßÿ\u0000r$ëÇû»þÿ\u0000îæ\\¬æß\u001eq[Ý­À°ù\u000fõðëhÂ\b=+\u0007Ö\u0017-GÞ\u000eVã\u0001F\u0007¢JÁ1æÖ¤i\u001366ø\u001a÷¯\u0019\u0012(¸=¸GÇ`c\u0007ÏyPãm×°ó'`Ût-H\f\u001b5«fÔ5Û<øbÖ,\u0017DÄÀl$ÈiîL\u0001ÀË1\u001b\u0000´ùÑúîD8$H'O]íÓ¯=ýrLÖ<NÜ0Ûª\u0010í¶aÍ{5Æ\u001b0Ï®²Ã<3Ç\u000eñË\f±ï¬±Ë\u001eûë.»ë¾»ï®øº\u0019W\\º¯èé£¨ëïëìÚ ã\u0017Ã\u0006þî÷Hÿ\u0000/\rýÝ\u0007îþ_2Ùæ=û>Í½ÜqÇ\u0015Ö©¯³_*ÚÝ]\u0001²Àlªê¶x.sµS×¥í^}¥éË\u0016bs,]/yCz¬a,t}'sz`\u0003¬DèÛ0F\u000b ¬©¥c1¯þM8Û\"øÕ´t¨\u001b;êÆß²VÝ[\"\u000ejÎU²÷++\u0011HnÑ ó\u0007]ÙùnîÅ¬×;\u0019\u001f¥ºõ¡d\u000e\u0019ÊÀv2÷Þ®9Z¼\u001aQÈ-òÕ`\u0016<[vBeÎ\u0011Ù%Í\\9\u0002¬I\u0000V;ýPpþB­ÿ\u0000ô6¯!\u000fiY\u001ex§h#öÏ§£\u0006YVÌHîpÆ\u001b\u00024r06àòêÈ0þ2L:þEö¿â¿\fä «\b!®9öB\u0002Z\u0004é\u0003Fìl¦É9iÛ}¨õî[û×Zvn~ÎÙ¿N½½õú\u0019íÑÙî×]ç¯\t\u001a2Ï¬zÛ¯¼·i*@ò\u0010ÁFÑ\rÑëµ\u0013\u00017$Ã\u0019;0þµóì¢éD\u0004×æOH0^^qx¯ûÚß½=RÕPÙ©V7üõlÚN³Ò«0\u000e+Ä&¯\u0003©£ZZ»\u0005\u0000:Y¬Ö~÷C\\Þó\n\f=[MÇç:WÌ¦¢ôMopzq³ßÉ^aqôiõÊþ»¬|oúÆË{Ðþ^=YxFHZjbµAe:èv1\u0018ìÙ\u001b\u0011\u0011a|)WC\u001b\"Ñ\u001c®öáµ+\rHc\u001e+ó\u0000\u0005½Gv}C\tÿ\u0000#>mÄ\u0007PKx\u0015óuî\u0018L¸Tô(êî³ï¿\u001aù´\u0017ñó5ËYÚ>_lB²ì_í¾¡SþÐØ§0ú\u0011A¼±\u0010õÌ\r\u0015^PZa%r­vãó;!@à\u0006¯µ\u000bèç³E½Y8öÖëê¦Ã«¦yêìs£&ÿ\u0000h\u001bm×È¦µRÖ|\u001f¬­Æ)µUZÁ_\u0010S\u0011±äW6e»\u001f<³\råÐ¸ÚH1ô§aâ=>\u0011á-²Ë tÊ,¥rµháer¤\u0000!\u0005`@Ù Â\u000eË&¸ûwºÔ\u00155Ûæ;\u001fÓ3ÂQóü\u0011V¢O<ÅÓ!KeÎgÍH GÛ3Nø_^,´\u0015ó1\u0015W°Ç£Nð×\u0018ÐFF;Çï»^\u0016^uRñ7làXK^^ ¼@5ì\r\u000fm\u0011U*\u000fac\u0019\u001d÷¿¢ÐÇ\u0014{»ú^æêßÞÏþûË£aI2ífV>\"î]¬.ôAI½:DeßÊ\u0017&sN8ãWP\u001cqÅxõba\u0006¤¾q­´\u0000+k!É°0)'\\1¼b¤eîË\u001dQ`\u001aD¹r6å½1ôìÙ]c}óY«,ôkª¹K¶«3}²Wö\u001aèÖ´óý2\u0013²à\u000bèÆHùÝa\u001e$àî÷èÏ\u001cûTd\u0019Ú{ïô$FÕ]ãÕzö\u0015s{Z+Jf¥sJÕ`\u000egº­KQÆ¥Ðø¬©¯³*é\u0010ØTi[»= K<Ç\u0004Qôa\u0005ØÑX@ËIM¥òü\u0000í\u0005\u0013yåbÞEÑ\\9®×âCÈUè\fò BÕú\u001062ÃgHB*¸Ë¿Wyd]g13ôÝ×Z4-]ïÆô\u001aP\t\u000bäe±ð\u0003´³©+\"_Q§å¹÷g\u000fnÞÞX´w³gzuª&m×§¼òïV\u001bw\u0018|ÃvÌ5÷ßèc³n\u001a4c³<zë,ñÓ«\u001c»ï­xuÖ.Î´Q)´Ò\u000fÖ9ì\u0017UÆÊ\u0012?d¼G4Bqcåa_\u0004\t}~\u0001V&F&\u0003`\u0006\u0002º¼(¡ÃefÅ\u001e,|¹{õéË!\u000büüËü ÿ\u0000u`ò-ôõ®¡¦Øì5\u001bmàuVPY©õâ:\u00135ÂAËyX°\u0016Êj\f°äÌ4bù\u0019zÍ°4\u0004Z2Uh\u0004\u0012eE*J<1S9Ä,\u0018@Kw6\u0004ó6çZ\rë.¸&µÞýç?ìÞ5©©Í«\u001f¤ÕQè¬-\u0016ËB\u0014isæ×\u001fØ}F\u000fpDÀvjh8¹\u0012C\u001cúiÌ>V_nùU=\u0011îu0ªí¼}¹K´ºúÎ±\u000eIRQÝ\u0012+Q$\u0004ÆVÕ5¤Óáx>Ú\u0010\u0018Âò5h$çÕ\bWä9ú\u0006\u0012× ¬â\t~¨³­/W\u0018ý}\u001f\\¹Îr¸üàÿ\u0000[ju®èË\u0002³^´\u001ak¤M¤+êÀ\u001e¤u×\"â\u0011\"ÅfyÓ\u0001Û\bìÂöÎùQyå\u001a¼ÛQÞhÎ^³=ÞÅj¨yäºÚ¼Ý@]>³®X \b\b§k[$ÈK}FÂ[\u0016É\u000e:â³£\fíúækEÒ¨ÏÓ»\bJòD\u0012\u0001JG\u001aIð$ô²$\u0006H¨ÔyÅ\"Za¸üI\u0012HÎFJ5Õ;\u000bÑXf<ØÄ\"ÙLµò|Å\u0017\u0019ç¢¹°Ú\"CA\u001eµ¡v\u0011i¥úaýwTý3!EÝ\u0002\u0010=SJ\u0004i\u0012Qs\u0016ÝÓ\\Ñ«ÃYl$FB8Á\tMtp\u0005F÷ÖÆ\u0010È¼¤\u0005¡Õ°ÖbÄ\u0017/°bâù9Ã,^NCFÎ£¾·£½\u0006Ø^2PTr3Ï*õ/)(y¡\u0005¥Âú«n*ã\u0001W}LIÕ9å±IìYQTK]\u001b-OT±Xw#½¥fM³¼Äú\u0019FÖó¥õg|\u0016Ï¬*Ë­Ô¤?;Ñ\u0016yû\u001e­X| î÷³\u0006{ÿ\u0000c1ßhjO_Üb¾§«2ñ\u0005\u00108Ï¹\u0017`é2®Nø|L&\u0018e\u0000b\u0005\u0016­ð\rê,Êè¡{Hcp¶Îê}göïTS\u0010\u001fÊÙ{%«ÙÀZT%,#Ø®Äwª§g\u000bK»YÕÔÅ\u0013ìiªÈRÁ`29\u0000\u0011\f­\"Û§!Q¹hG\u0011\u001e\\|\u0012ÂgD&,¤8¤F#LÈ$\u0007ÍÑs¡KÍ\u0012¢K·^øÒ4ìÏNý;0Û¯<°Ë\u001c»á¶Úç®©\u0005\u001b½\u0016\u001d w½÷\u001aèv7ËÝeKW>´ôÝè\u0005fh:X¨\u0017\u0015±Ù+uõ¬ªÑ@¡cKo«L{ð\u001467ZüÙ\\\u0017§|ëAÔL\u0013t=VRµepl}î@º:0%StmÙ;6é0^íú¶lÇ\u001cóÃf9eYwß\\ÉÆ1\fIRÍ±À\u001f0H/dE#\"r6\u0007ê\u0001æw&Å\u001boSW\u001cqÎuuîøa/ÝÓ¾é#åñðÂ_»§}ÒGËäÅÇ\u0015Ó»\u001cÏ¿gØ¼;ðÂ_»§}ÒGËãá¿wNû¤Ì_ /ô\u0002Â¹ÝÕýj\u001bx°Vk\u0014Ä\nÇ´\rmÌX\u0010ß\u00064I6{íf\u0006$X\"I\u0011%8Û­\u0011¡CÝ³\u000e÷lë\u001dYH5ÛQ×Tá\fÌµ«­Bhd?]¯,IõÉ7\u0015ÿ\u0000ÔÊM\u001b²ójgûA\u0003wE¢EÐlÀ^M÷¬Y(Zô0Ö²\" j)ìÖCúeuKji\r2ÅÍ­¶øçfþÅQ\u0001ÅÕ^C&õ\u001fzº|}Yþ¯·¾òÝ\u0014³ÆÝøw¯¬{ÙXa2?}g\u0018áÒw¼²Ë^Î°Ú>\u0018K÷tïºHù|ÙGª\u000e\u001fÈU¿þÕæ\u001eæ¶ÃRû]\u000b®¹8îÜqiUy2¾\u000b¤ós[Ø+kÀ`Í\u001cFóÊ\u0011ÑÔ¢ìG\u0000¬\u001d®a¦3¡ÂÀB>È\u0013 \u0006H\u001f8ÅV\b\u0000\t'sýÿ\u0000ûý>~/\u0012ýÝ;î>_\u001f\f%ûºwÝ$|¾W^õD\b:ôjÎ¼LùÃ_4\u0005®1ºµ\\\u000bÈ²íS{äï³ôSX\f\u001bUDÎÇÜëÕ¿.Õy\u0010rË ¹\bBwþ3ýú¹\u001d\u0015Í\u0002ô%½-ÅbËp,_&¨ép­BÓ-]¡ZøX½>Ø\bê£X\u0012\u001f4L\u0001¥ÉðsZQÀ4Ã\u00172f­Ñ?IÊÛëðë±¬Põlñ}¶Ë¸¶C\u0016çc>\u0018K÷tïºHù||0îéßtòù\u000fÛ^ä¡ê\n¹ÏciTô{-B¹PBM\u000b®{\u0013>»@N×\u00193\u0012bx.*\u000ez\u001b\u0013ir²aü\u0018gXBÕ\u001es!\u0010JÉ·µö\u000e×Ë5ÎÏtê¿­k\u001aÆ\u001aÄ·gf}JìÏ\u0004ãÚìÖ x4ÔÖvCG\u001b\u001c\u0017BA'-\u001dÌÑcçfZÆäíçü®ñ[¦>¦K|}væÇÏ'ðÂ_»§}ÒGËãá¿wNû¤ÊÚ[òÖ:Ók&tº¾ôµNÙ«\u0017\u001b\u0015\u0012ª\u0016:BÏ\u0004!ß$\u001f\u0007;¿%¯\u000bUX\u0007E¡\u0000!ó)ÖÉ]\nE\fÛÞ½»p¹(në6b2eK\u0013)Ö\u0002¢ëº|4ïU±\u0010Ï\u0001%yZôÉÑásâÊÇL:·êëoXn×ÌrÇ¬1 2\u0010d|Å¿Áø¢°h#\u0013;\u0003ò(±ò?&\u001f]#á¿wNû¤ÇÃ\t~î÷I\u001f/\u0017\u001cÊÞìs>ýbî9úÈ\u0017í¿ò8úÈ\u0017í¿ò8«cú­^Ã¯¢Xµâ òþ[Sö\u0002Ð[\u001c;\u0003E8Ë1\u00169)!´¯5\né&\r¤Q~±`k\u000eL¸íy®¿3¬\u0000&«9¬M`_H¸\u0013üþ\u001c«iÏ:G}\tõ:nkyZ¶íCu\u0015dålº6Õu\u0007lÑ%O\u001eWºÊ½4¸Þ!È\u0011_\u0015Ø-\u0011\"¼,\\Ù\u0016wë _¶þ\u001e_Èãë _¶þ\u001e_Èåj:tìÞù\u000fª\u0019Ø\u0003Ö§Ã«S\r,3ÍkÃ¿Õ\u0007\u000fä*ßÿ\u0000CjóEô»ÖK¹\u001fóµQ\"ç¸ð\u0004zRN£i@´~¼XQÒHÈ~w®WO\u001f&[4½Z¾\u0017Ü\u0013AwèÈýª\tq\u0018X\fä;'\u001f,%'\"ÂÆ>:å÷/Vp\rØóÝ¿OêÝ}\u001c}ý\u0011×]¿¥Óm3\u000fÑÇè?>{Ö@¿mü<¿Á> P(BÇ\u0005F68*\u0010F¤Ì®\bapØþÉEªàWYóe åï@J{ =\u000bbY\u0016ê}ÀõåHo£e]tµ`[§+ÿ\u0000AºS1Ø\"¸»\u0000\u0005E¹þº\u0016%-zrj1\u0000'À¯¯=vç:öçkU°\rïjúãõÊ\u000eÈóÌGÚåJù¿¬[Ë\u001f?(\u0016·¯:PofÙ¢Z;+÷\u001bY4ÁoªàWY¤£ãÓ+2Ër¿bþ²\u0005ûoáåü>²\u0005ûoáåüWx[\"%\u0017w\u0012ßc\"GU°U:\"³ãÂ\u000eÛz=Ë®6ú¿Ç\u001eª¹Ä\u000e³)25½\u001f\u0005//!×¾]µ¨ÁG(%4+ö¯³\u001fâ²«¯e\u0000§ãí!-iÂ\u0012\bc>¶*F»HhO\bl;ì]ÑFz\u0011bÈ£½\u0010\tÊÐõ:¦á4àbÙëXkÊNôµ¹W±E %ÈZªóÏ`ö\u0007Õc\u0018\u0003ô\u0005àòGbÔ0¬\fXò%£ ÿ\u0000Y\u0002ý·ðòþG\u001fY\u0002ý·ðòþG\u001dä¬\u000e\u0000\"àb@\u0002\u001ep2õ2I,Öé$I\u0012¥¼I ¬o¬\u0010µp÷Ä÷jþÂÁ£ì{(tþÿ\u0000(\u000bÃÅiç?@'Rö¥oi{KÐsîuÀÅí6\r]\u0019Â¦VRiaE²Ô×ÝM¨34\f\u0004Æ^¯·\u0006_Ä\u0007g|þ´òCÒÖvå\u0016J¥K\\­X;ÒFD\b¹Ø\u0012xqm[TÀ2\u0000¥¬ÎE!ÐF\r\b_qcÅ\u001f\u0007F½quH\u001fY\u0002ý·ðòþG\u001fY\u0002ý·ðòþG2S2\u0000\u0014&Ï$rJÎË\u0001µHÆ\u0011$\\.F\u0000\u0000`\u0007ÞJN³s\u0007õ/Û\u000f/äqõ/Û\u000f/är*Øæ>¢¢¾8ãáUÕÞ Sò­~\t¹\u0000RË::\u000f¯\u0011Æµ<®Ö*\u0019§\u0005>Ñ*[}×À\u0014WÙÚ\u0018ØeÆ%&8À»¢\u0006\ntüÑ!HMÛV/(I]IPB¸3»äWíøX(ÙË&64©¸§½à\u001d{\u0017%­RönÒ\u0015£µð9\u001f®9=Eg'(\u0011àOQRö)ú¸_\u001b±<ñpwk«ªZ²\nCpèq`UæAc\b²è]@Av\u000eöuÁ©ìò\u00043.\tÃ`y0¥ÌË^ÊTÑÚ\"\u001aÏ5vK\u001cÇ{vÇ;\r3LØèëen+mÞÚ ±MJÞëªæépGH,Dr\u001bÙ/!±lè\u0004ywº¾Ü\u0005îI½ê[#þ?»?Nµ/Bÿ\u0000?2ÿ\u0000($ÝX<×­÷g\u0004$½¦kúÔ²ç0Úâêúl\u0002ºanÆn\u00104´m\u001cg¥dÅ¨Ò·k`Ò\u0010ôááGKÈX\u0013e3.^Ã\u000büüËü ÿ\u0000u`ò>ôl\u001bð¥:Þ+Ì²ÐF\\etB\u001a´jÉ:Yup\fI¤#h`7 tK/n¶AÀs#½K©éGÁàËÐ¹'\u000f¢`É£çIpÛ$\u000f,rEÀæEùV\u001f±Uaí§ÒÅ©¡ÁïôiOH¹y]o²âÛª¨é¡\u0006¯s49ê»uÕò\rJ¯  DÃ\u000e¦ê§>µbï+\u0004©j0åE#>\u001f£¯dÚíUjõTù¦IÑCÞ\u0013­è¯ìJá\"¯=çòõm\u001aÃó­µÖcªÓf¤½\u001b\u0016Ö\u0016Ë¯.LcdfM\"\u0014y\u001aho7z\u0004\u00127§¨V\u001e}¯,_0Z¬®\nIyú\"Ó´\u0014-à6-núe\u0012²®\"ÞiFx\u0001e30Xd\u001fçµu[XûN³Ù,æýù³ÏÈ^¤ÏåOW@¦êÊ]xe\u0003g£°ï\u000bÖJL÷\u0015K@³[î;y²ëÎ°\u0000t\r\u0001vÎHÆn};\t¸Ya+Æì% KëF2²aÌ\u0001®Å¢<W\u0006DÙIÜI 4ø¼ÇIEC9$v»q\u0000Þ-ù±} *î{+Uµ\u0017¬°Uó\u0013¯IÊ§­×ÒhV:¥^Ù«ÀÌ6\u001b¼ \u001dÄ@ºóu \u001c=Päì*ðÊ¬¡¦T\fNl46r¿îÆ*§uT§_¡\u000e²í;©òj\u001a\u0012±çMÚ®­ Ñ\u001bìf\u0016÷XêosÁ\u0000\n®O\fr\u0012ÎTÙàÅF\u0017Ö©ÒH@§>ðu­èX\u0004ìQ³1p¹óFzÍXí<ùE+¦mÕë&h¤\u0007ÿ\u0000$Ì¶;Î,½'ÚÉÑ¡L[Ìem\u000f+y'À4)fÐòkHÇ\nÚï£\u0019\r8Üµí-ø/Dß7QjÙæ\u000b\u0005edÖM\u0001DÙÝ­@o®ÆÍ®?ö/OTÜEtRü¤Ì@é\u0015Ð\t\\?\u000e\u001b\u0004¤HÙ\u0000Xqm6\u001dµÉ«^Üî@¹d\\\u0001Ï\u001f;×71j\u0013?C¡S\u0014¤t´Ð÷\u000föß\u001aêô£­dJ²o¡\u001d\u001cÐ­P#2DòõÜ=Ð \u0003è\fØCfÙ5ZAhÑ¢ÈÐ»«\u0019xõÅ©ÚZ*úíÑå'ºÕÉ¹%a¢»ÌßlN\r\f5\u0019'»\u000e¿ñykÒåm\u0013.~!Fa\"TM»5Ä×¯¼zå2\u0013ä{\u0017º\u0016¨£\u0019XÒ¦9èÆÛ÷Õ;Çn9\u001e\u001b,G;Ãôéêâ¾ NÍÅV\\Ì*É¥¶3Ë^ÈA\tTÈ»É\u0016è6]\räÏN\"\u0007W\u0004ùAQÉÞç\r.µ±Õ»ÀÊÊ¾\u0006>y{\u0001N8ãUS\u001cqÅy\u0014ã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)N8ãS8âã8¥8ã)_ÿÙ" 
    const dataURI = `data:image/png;base64,${btoa(binaryImageData)}`;
    console.log(binaryImageData); 


console.log(dataURI);

  return (
    <>

    {/* <img src={dataURI} alt="Looker Image" /> */}
    <ProcessImage
      image={dataURI}
      resize={{ width: 500, height: 500 }}
      colors={{
        mix: {
          color: 'mistyrose',
          amount: 20
        }
      }}
      processedImage={(src, err) => setState({ src, err })}
    />
    </>
 
  )
}

export default BinaryData