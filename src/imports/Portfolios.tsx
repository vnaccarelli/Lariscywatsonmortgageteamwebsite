import imgKeyPoints from "figma:asset/3873f7503301698ae9869bcbd9bac84a9e010c6b.png";
import imgRectangle4504 from "figma:asset/89f3f03978e561be316655f15795d09bdeac9181.png";
import imgCreditScore from "figma:asset/5a8f9f6c5085ca6c0b078fb0f5b6422d20e16e5c.png";
import imgGovernmentOrFed from "figma:asset/c91a0105759a74a2eed28d32cb2d100d15959dd0.png";
import imgRectangle4505 from "figma:asset/3802e23e50a099f4e804f6ac3128101c80c1ec85.png";
import imgNewsletter from "figma:asset/bb730483ac2dc77c3fa29b7e3523872a2199a690.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
      <p className="font-['Poppins:Bold',sans-serif] leading-[48px] relative shrink-0 text-[#111928] text-[40px]">Housing Pulse</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#637381] text-[16px]">Browse our blog posts and articles for expert knowledge on all things mortgage.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Section Title">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#8fc295] text-[18px] text-center text-nowrap whitespace-pre">Our Blog</p>
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#8fc295] box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white whitespace-pre">All Posts</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">Credit</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">First Time Homebuyers</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">Homebuying Tips</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">Interest Rates</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">Newsletters</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center px-[30px] py-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#637381] text-[16px] text-nowrap whitespace-pre">Mortgage Market</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame4 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0">
      <SectionTitle />
      <Frame5 />
    </div>
  );
}

function ThummbnailImageFrame() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute inset-[-12.5%_-0.68%]" data-name="Key Points">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgKeyPoints} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap whitespace-pre">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px]">Interest Rates</p>
      <p className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px]">May - Key Points</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#637381] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Read Blog Post</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame1 />
      <Button />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame2 />
    </div>
  );
}

function PortfolioGrid() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame />
      <Frame3 />
    </div>
  );
}

function ThummbnailImageFrame1() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute inset-0 rounded-[10px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle4504} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap w-full whitespace-pre">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px]">Newsletter</p>
      <p className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px]">May 31, 2025</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#8fc295] box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Read Blog Post</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame14 />
      <Button1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame15 />
    </div>
  );
}

function PortfolioGrid1() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame1 />
      <Frame16 />
    </div>
  );
}

function ThummbnailImageFrame2() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute aspect-[1500/1500] bottom-0 left-[-0.68%] right-[-0.68%]" data-name="Credit Score">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCreditScore} />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px] whitespace-pre">Credit</p>
      <div className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px] whitespace-pre">
        <p className="mb-0">How to Improve Your</p>
        <p>Credit Score</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#637381] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Read Blog Post</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame17 />
      <Button2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame18 />
    </div>
  );
}

function PortfolioGrid2() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame2 />
      <Frame19 />
    </div>
  );
}

function ThummbnailImageFrame3() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute inset-[-12.5%_-0.68%]" data-name="Government or Fed">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGovernmentOrFed} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px] whitespace-pre">Mortgage Market</p>
      <div className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px] whitespace-pre">
        <p className="mb-0">The Government Shutdown</p>
        <p>{`& What It Means for`}</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#637381] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Continue Reading</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame20 />
      <Button3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame21 />
    </div>
  );
}

function PortfolioGrid3() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame3 />
      <Frame22 />
    </div>
  );
}

function ThummbnailImageFrame4() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute inset-0 rounded-[10px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle4505} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px] whitespace-pre">First Time Homebuyers</p>
      <div className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px] whitespace-pre">
        <p className="mb-0">New Home Sales Jump</p>
        <p>While Builders Pump</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#637381] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Continue Reading</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame23 />
      <Button4 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame24 />
    </div>
  );
}

function PortfolioGrid4() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame4 />
      <Frame25 />
    </div>
  );
}

function ThummbnailImageFrame5() {
  return (
    <div className="absolute h-[300px] left-0 overflow-clip rounded-[10px] top-0 w-[370px]" data-name="Thummbnail Image Frame">
      <div className="absolute inset-[-12.5%_-0.68%]" data-name="Newsletter">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgNewsletter} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center not-italic relative shrink-0 text-center text-nowrap">
      <p className="font-['Poppins:Medium',sans-serif] leading-[22px] relative shrink-0 text-[#8fc295] text-[14px] whitespace-pre">Homebuying Tips</p>
      <div className="capitalize font-['Poppins:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#111928] text-[20px] whitespace-pre">
        <p className="mb-0">Home Maintenance</p>
        <p>Checklist</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[28px] py-[10px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dfe4ea] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#637381] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre">Read Blog Post</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <Frame26 />
      <Button5 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[10px] items-start left-[7.57%] right-[7.57%] top-[53.63%]">
      <div className="bg-white h-[185px] rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] shrink-0 w-[314px]" />
      <Frame27 />
    </div>
  );
}

function PortfolioGrid5() {
  return (
    <div className="h-[399px] relative shrink-0 w-[370px]" data-name="Portfolio Grid">
      <ThummbnailImageFrame5 />
      <Frame28 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-start flex flex-wrap gap-[30px] items-start relative shrink-0 w-[1170px]">
      <PortfolioGrid />
      <PortfolioGrid1 />
      <PortfolioGrid2 />
      <PortfolioGrid3 />
      <PortfolioGrid4 />
      <PortfolioGrid5 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[60px] items-center left-[135px] top-[120px]">
      <Frame13 />
      <Frame29 />
    </div>
  );
}

export default function Portfolios() {
  return (
    <div className="bg-white relative size-full" data-name="Portfolios">
      <Frame12 />
    </div>
  );
}