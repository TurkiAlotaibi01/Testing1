export const metadata = {
  title: "قصص كل يوم",
  description: "صفحة الاشتراك في قصص كل يوم."
};

export default function SubscribePage() {
  return (
    <main className="paywall-html-page" dir="rtl">
      <div className="stars" />
      <div className="container">
        <div className="testimonial">
          <div className="testimonial-name">سارة ال.</div>
          <div className="stars-rating">★★★★★</div>
          <div className="testimonial-text">
            الله يجزاكم خير الجزاء ما تخيلوني قد ايش ريحتوني و فرحتوا البنات شكراً لكم جزيل الشكر
          </div>
        </div>

        <div className="headline">
          <h1>قصص كل يوم، طفلك بطل القصة <span className="accent">بصوتك</span></h1>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">📖</div>
            <div className="feature-content">
              <div className="feature-title">القصص تحفّز نمو عقولهم</div>
              <div className="feature-desc">القصص قبل النوم تزيد نمو عقل الطفل بـ <span className="highlight">31%</span></div>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">🌙</div>
            <div className="feature-content">
              <div className="feature-title">قصص تحسمهم ينامون بدري</div>
              <div className="feature-desc"><span className="highlight">54%</span> من الأطفال صاروا ينامون بدري لمّن يسمعون القصص</div>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">💭</div>
            <div className="feature-content">
              <div className="feature-title">قصص و مواقف يتذكرونها لمّا يكبرون</div>
              <div className="feature-desc">أطفالك إبداع بسمعون قصصك لما يكبرون</div>
            </div>
          </div>
        </div>

        <div className="plans">
          <div className="plan">
            <div className="plan-info">
              <div className="duration">3 أيام</div>
              <div className="total">30 ر.س</div>
            </div>
            <div className="plan-price">10 ريال/الليلة</div>
          </div>

          <div className="plan featured">
            <div className="badge">وفّر 50%</div>
            <div className="plan-info">
              <div className="duration">7 أيام</div>
              <div className="total">35 ريال</div>
            </div>
            <div className="plan-price">5 ريال/الليلة</div>
          </div>

          <div className="plan">
            <div className="plan-info">
              <div className="duration">30 يوم</div>
              <div className="total">90 ر.س</div>
            </div>
            <div className="plan-price">3 ريال/الليلة</div>
          </div>
        </div>

        <button className="apple-pay" type="button" dir="ltr">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
          </svg>
          Pay
        </button>
      </div>
    </main>
  );
}
