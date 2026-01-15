import imgImage1 from "figma:asset/5cce29239c6d13d443def9f5b612f9defa2fda2f.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[20px] items-start not-italic relative shrink-0 text-[#637381]">
      <p className="leading-[36px] relative shrink-0 text-[24px] w-[470px]">Serving Savannah, Pooler, Richmond Hill and Effingham County</p>
      <div className="leading-[24px] relative shrink-0 text-[16px] w-[389px]">
        <p className="mb-0">{` At the Lariscy Watson Mortgage Team, we combine local Savannah insight with Lending Heights’ national lending power to deliver fast, transparent, and personalized mortgage solutions. Whether you’re buying your first home in Pooler, building on family land in Effingham, or refinancing in Richmond Hill, our team understands how to make the mortgage process smooth from pre-approval to close.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">We live, work, and lend right here in Savannah — so you get real people, real communication, and real results.</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <div className="font-['Poppins:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#1e1e1e] text-[40px] w-[469px]">
        <p className="mb-0">Local Lending,</p>
        <p>Personal Service</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#8fc295] text-[18px] w-[153px]">Why Choose Us</p>
      <Frame1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#8fc295] box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[13px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Get Started</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[calc(50%+350px)] top-[calc(50%+2.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Content">
      <Frame2 />
      <Button />
    </div>
  );
}

function DottedShape() {
  return (
    <div className="h-[177.268px] relative w-[140.135px]" data-name="Dotted Shape">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 178">
        <g id="Dotted Shape">
          <circle cx="2.21033" cy="2.21032" fill="var(--fill-0, #507A56)" id="Ellipse 1" r="2.21032" />
          <circle cx="2.21033" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 6" r="2.21032" />
          <circle cx="2.21033" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 11" r="2.21032" />
          <circle cx="2.21033" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 16" r="2.21032" />
          <circle cx="2.21033" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 21" r="2.21032" />
          <circle cx="2.21033" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 31" r="2.21032" />
          <circle cx="2.21032" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 41" r="2.21032" />
          <circle cx="2.21033" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 26" r="2.21032" />
          <circle cx="2.21033" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 32" r="2.21032" />
          <circle cx="2.21032" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 42" r="2.21032" />
          <circle cx="21.6613" cy="2.21033" fill="var(--fill-0, #507A56)" id="Ellipse 2" r="2.21032" />
          <circle cx="21.6613" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 7" r="2.21032" />
          <circle cx="21.6613" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 12" r="2.21032" />
          <circle cx="21.6613" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 17" r="2.21032" />
          <circle cx="21.661" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 22" r="2.21032" />
          <circle cx="21.661" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 33" r="2.21032" />
          <circle cx="21.661" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 43" r="2.21032" />
          <circle cx="21.661" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 27" r="2.21032" />
          <circle cx="21.661" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 34" r="2.21032" />
          <circle cx="21.661" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 44" r="2.21032" />
          <circle cx="41.1119" cy="2.21033" fill="var(--fill-0, #507A56)" id="Ellipse 3" r="2.21032" />
          <circle cx="99.0225" cy="2.21033" fill="var(--fill-0, #507A56)" id="Ellipse 51" r="2.21032" />
          <circle cx="41.1119" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 8" r="2.21032" />
          <circle cx="99.0225" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 52" r="2.21032" />
          <circle cx="41.1119" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 13" r="2.21032" />
          <circle cx="99.0225" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 53" r="2.21032" />
          <circle cx="41.1119" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 18" r="2.21032" />
          <circle cx="99.0225" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 54" r="2.21032" />
          <circle cx="41.1122" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 23" r="2.21032" />
          <circle cx="99.0229" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 55" r="2.21032" />
          <circle cx="41.1122" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 35" r="2.21032" />
          <circle cx="99.0228" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 56" r="2.21032" />
          <circle cx="41.1122" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 45" r="2.21032" />
          <circle cx="99.0228" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 57" r="2.21032" />
          <circle cx="41.1122" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 28" r="2.21032" />
          <circle cx="99.0229" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 58" r="2.21032" />
          <circle cx="41.1122" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 36" r="2.21032" />
          <circle cx="99.0228" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 59" r="2.21032" />
          <circle cx="41.1122" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 46" r="2.21032" />
          <circle cx="99.0228" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 60" r="2.21032" />
          <circle cx="60.5629" cy="2.21033" fill="var(--fill-0, #507A56)" id="Ellipse 4" r="2.21032" />
          <circle cx="118.473" cy="2.21034" fill="var(--fill-0, #507A56)" id="Ellipse 61" r="2.21032" />
          <circle cx="60.5629" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 9" r="2.21032" />
          <circle cx="118.473" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 62" r="2.21032" />
          <circle cx="60.5629" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 14" r="2.21032" />
          <circle cx="118.473" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 63" r="2.21032" />
          <circle cx="60.5629" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 19" r="2.21032" />
          <circle cx="118.473" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 64" r="2.21032" />
          <circle cx="60.5629" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 24" r="2.21032" />
          <circle cx="118.473" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 65" r="2.21032" />
          <circle cx="60.5629" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 37" r="2.21032" />
          <circle cx="118.473" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 66" r="2.21032" />
          <circle cx="60.5629" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 47" r="2.21032" />
          <circle cx="118.473" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 67" r="2.21032" />
          <circle cx="60.5629" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 29" r="2.21032" />
          <circle cx="118.473" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 68" r="2.21032" />
          <circle cx="60.5629" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 38" r="2.21032" />
          <circle cx="118.473" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 69" r="2.21032" />
          <circle cx="60.5629" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 48" r="2.21032" />
          <circle cx="118.473" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 70" r="2.21032" />
          <circle cx="80.0138" cy="2.21033" fill="var(--fill-0, #507A56)" id="Ellipse 5" r="2.21032" />
          <circle cx="137.924" cy="2.21034" fill="var(--fill-0, #507A56)" id="Ellipse 71" r="2.21032" />
          <circle cx="80.0138" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 10" r="2.21032" />
          <circle cx="137.924" cy="21.6611" fill="var(--fill-0, #507A56)" id="Ellipse 72" r="2.21032" />
          <circle cx="80.0138" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 15" r="2.21032" />
          <circle cx="137.924" cy="41.1121" fill="var(--fill-0, #507A56)" id="Ellipse 73" r="2.21032" />
          <circle cx="80.0138" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 20" r="2.21032" />
          <circle cx="137.924" cy="60.5629" fill="var(--fill-0, #507A56)" id="Ellipse 74" r="2.21032" />
          <circle cx="80.0135" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 25" r="2.21032" />
          <circle cx="137.924" cy="80.0137" fill="var(--fill-0, #507A56)" id="Ellipse 75" r="2.21032" />
          <circle cx="80.0135" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 39" r="2.21032" />
          <circle cx="137.924" cy="117.589" fill="var(--fill-0, #507A56)" id="Ellipse 76" r="2.21032" />
          <circle cx="80.0135" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 49" r="2.21032" />
          <circle cx="137.924" cy="156.049" fill="var(--fill-0, #507A56)" id="Ellipse 77" r="2.21032" />
          <circle cx="80.0135" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 30" r="2.21032" />
          <circle cx="137.924" cy="99.0225" fill="var(--fill-0, #507A56)" id="Ellipse 78" r="2.21032" />
          <circle cx="80.0135" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 40" r="2.21032" />
          <circle cx="137.924" cy="136.598" fill="var(--fill-0, #507A56)" id="Ellipse 79" r="2.21032" />
          <circle cx="80.0135" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 50" r="2.21032" />
          <circle cx="137.924" cy="175.058" fill="var(--fill-0, #507A56)" id="Ellipse 80" r="2.21032" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[530.478px] left-[62px] overflow-clip rounded-[15px] top-[51px] w-[498.649px]">
      <div className="absolute left-1/2 size-[533.13px] top-0 translate-x-[-50%]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[62px] top-[51px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[421.4px] top-[479.36px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "140.125", "--transform-inner-height": "177.25" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <DottedShape />
        </div>
      </div>
      <Frame3 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[670px] left-[135px] top-[120px] w-[600px]" data-name="Image">
      <Group />
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-white relative size-full" data-name="About">
      <Content />
      <Image />
    </div>
  );
}