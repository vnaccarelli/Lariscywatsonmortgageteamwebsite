import imgHappyLadyInOfficeYellowJacket1 from "figma:asset/c0a69e2857188ddc8c2e01aeccb6d569d015bb1f.png";
import imgHappyCoupleHomeImprovement from "figma:asset/e9742209d610a738fa7f50c21b64987def2e32f5.png";
import imgImage5 from "figma:asset/233ecafd0b0b50c963107406a81d65b0e9977556.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="font-['Poppins:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#111928] text-[40px] text-center text-nowrap whitespace-pre">Services</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Section Title">
      <Frame />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[230px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[370px]">
      <div className="absolute h-[281px] left-[calc(50%-0.48px)] top-0 translate-x-[-50%] w-[419.419px]" data-name="Happy lady in office yellow jacket 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[119.11%]" src={imgHappyLadyInOfficeYellowJacket1} />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start not-italic relative shrink-0 text-center">
      <p className="font-['Poppins:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#1e1e1e] text-[22px] w-[300px]">{`Home Purchases & Refinances`}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-gray-500 w-[300px]">{` We specialize in both purchase and refinance transactions, providing personalized solutions to suit individual financial situations and goals for primary residence, second homes and investment properties. `}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#8fc295] bottom-[30px] box-border content-stretch flex gap-[10px] items-center justify-center left-[87.5px] px-[28px] py-[13px] rounded-[6px]" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">VIP Refi Watchlist</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[28px] grow items-center min-h-px min-w-px px-[35px] py-[30px] relative shrink-0">
      <Frame2 />
      <Button />
    </div>
  );
}

function CardGrid() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] shrink-0" data-name="Card Grid">
      <Frame9 />
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[230px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[370px]">
      <div className="absolute h-[262px] left-[calc(50%-0.38px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[393.24px]" data-name="Happy Couple Home Improvement">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHappyCoupleHomeImprovement} />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start not-italic relative shrink-0 text-center">
      <p className="font-['Poppins:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#1e1e1e] text-[22px] w-[300px]">{`Loan Products & Programs`}</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-gray-500 w-[300px]">{` We offer a full suite of Non-QM and alternative mortgage programs designed for borrowers who don’t fit traditional lending boxes. Whether you’re self-employed, an investor, or just have unique income or property needs—chances are, we have a solution.`}</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Programs</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[28px] grow items-center min-h-px min-w-px px-[35px] py-[30px] relative shrink-0">
      <Frame4 />
      <Button1 />
    </div>
  );
}

function CardGrid1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[603px] items-start overflow-clip relative rounded-[8px] shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] shrink-0" data-name="Card Grid">
      <Frame10 />
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#272c3a] h-[230px] overflow-clip relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[370px]">
      <div className="absolute left-[49.5px] size-[266px] top-1/2 translate-y-[-50%]" data-name="image 5">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage5} />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start not-italic relative shrink-0 text-center">
      <p className="font-['Poppins:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#1e1e1e] text-[22px] w-[300px]">Hero Housing Initiative</p>
      <div className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-gray-500 w-[300px]">
        <p className="mb-0">{` The Hero Housing Initiative is a program designed exclusively for military personnel, veterans, EMS, police, firefighters, healthcare workers, and education workers. `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-white bottom-[30px] box-border content-stretch flex gap-[10px] items-center justify-center left-[112.5px] px-[28px] py-[10px] rounded-[6px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-500 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Learn More</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[28px] grow items-center min-h-px min-w-px px-[35px] py-[30px] relative shrink-0">
      <Frame6 />
      <Button2 />
    </div>
  );
}

function CardGrid2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] self-stretch shadow-[0px_1px_3px_0px_rgba(166,175,195,0.4)] shrink-0" data-name="Card Grid">
      <Frame11 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex gap-[30px] items-start left-[135px] top-[calc(50%-1px)] translate-y-[-50%]">
      <CardGrid />
      <CardGrid1 />
      <CardGrid2 />
    </div>
  );
}

function Cards() {
  return (
    <div className="h-[753px] overflow-clip relative shrink-0 w-[1440px]" data-name="Cards">
      <Frame8 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <SectionTitle />
      <Cards />
    </div>
  );
}

export default function FeaturesServices() {
  return (
    <div className="bg-white relative size-full" data-name="Features & Services">
      <Frame1 />
    </div>
  );
}