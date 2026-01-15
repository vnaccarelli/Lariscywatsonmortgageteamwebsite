import imgHappyPeoplePictures from "figma:asset/ee897b3deef9743e57b74bdf36953d82523740e4.png";

function HappyPeoplePictures() {
  return (
    <div className="absolute h-[887.625px] left-0 top-[-84px] w-[1578px]" data-name="Happy People Pictures">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHappyPeoplePictures} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="[text-shadow:rgba(0,0,0,0.2)_0px_0px_1px] font-['Poppins:Bold',sans-serif] leading-[58px] not-italic relative shrink-0 text-[48px] text-center text-nowrap text-white whitespace-pre">Am I Ready To Buy?</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex font-['Poppins:Bold',sans-serif] gap-[10px] items-center justify-center leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white w-full">
      <p className="[text-shadow:rgba(0,0,0,0.2)_0px_0px_1px] basis-0 grow min-h-px min-w-px relative shrink-0">No Credit Pull</p>
      <p className="[text-shadow:rgba(0,0,0,0.2)_0px_0px_1px] basis-0 grow min-h-px min-w-px relative shrink-0">Takes 3 Minutes</p>
      <p className="[text-shadow:rgba(0,0,0,0.2)_0px_0px_1px] basis-0 grow min-h-px min-w-px relative shrink-0">Instant Results</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0">
      <Frame />
      <p className="[text-shadow:rgba(0,0,0,0.2)_0px_0px_1px] font-['Poppins:Regular',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-center text-white w-[min-content] whitespace-pre-wrap">{`A few simple questions can tell you what is the best way for YOU to proceed forward.  Take our 3 minute quiz to determine if now may be the time.`}</p>
      <Frame3 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#507a56] box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[13px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Take Quiz</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-center justify-center left-[calc(50%+0.31px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[624.625px]">
      <Frame1 />
      <Button />
    </div>
  );
}

export default function Banner() {
  return (
    <div className="relative size-full" data-name="Banner">
      <HappyPeoplePictures />
      <div className="absolute bg-[#282b3a] h-[550px] left-0 opacity-[0.85] top-0 w-[1578px]" />
      <Frame2 />
    </div>
  );
}