export const userEmailTempelates = (data) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>You've Registered for the GTC Demo Competition</title>
    <!-- Web fonts are often blocked; keep as optional with fallbacks -->
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#F7F9FC;font-family:Poppins,Segoe UI,Roboto,Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;">
      <tr>
        <td align="center" style="padding:24px;">
          <!-- Card -->
          <table width="650" cellpadding="0" cellspacing="0" role="presentation" style="width:650px;max-width:650px;background:#FFFFFF;border:1px solid #E6ECF2;border-radius:12px;">
            <!-- Header Logo -->
            <tr>
              <td align="center" style="padding:28px 32px 8px 32px;">
                <img src="/new/logo.svg" width="160" alt="GTC" style="display:block;border:0;outline:none;text-decoration:none;">
              </td>
            </tr>

            <!-- Title -->
            <tr>
              <td align="center" style="padding:6px 32px 0 32px;font-size:22px;line-height:30px;color:#132F47;font-weight:600;">
                Thank you for joining us! 🌟
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:8px 32px 18px 32px;font-size:14px;line-height:22px;color:#4A6178;">
                Just wanted to say a big thank you for signing up!
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:0 32px;">
                <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-top:2px solid #E6ECF2;line-height:0;font-size:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Greeting + Copy -->
            <tr>
              <td style="padding:20px 32px 0 32px;font-size:14px;line-height:22px;color:#132F47;">
                Hi ${data?.firstName},
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0 32px;font-size:14px;line-height:22px;color:#132F47;">
                We’re really happy to have you with us. 😊
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0 32px;font-size:14px;line-height:22px;color:#132F47;">
                You’ve just taken the first step towards trading gold smarter, faster, and more rewarding.
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 0 32px;font-size:14px;line-height:22px;color:#132F47;">
                Once you’ve done that, our friendly GMG Customer Care team will give you a quick call to help you finalise your trading account — and yes, they’re genuinely helpful (and very human).
              </td>
            </tr>

            <!-- Bullets (email-safe) -->
            <tr>
              <td style="padding:10px 32px 0 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td valign="top" width="10" style="padding-top:3px;">
                      <span style="display:inline-block;width:6px;height:6px;background:#E77831;border-radius:50%;"></span>
                    </td>
                    <td style="font-size:14px;line-height:22px;color:#132F47;padding:0 0 6px 8px;">Your details are safe with us.</td>
                  </tr>
                  <tr>
                    <td valign="top" width="10" style="padding-top:3px;">
                      <span style="display:inline-block;width:6px;height:6px;background:#E77831;border-radius:50%;"></span>
                    </td>
                    <td style="font-size:14px;line-height:22px;color:#132F47;padding:0 0 6px 8px;">You’ll be trading gold in no time at all.</td>
                  </tr>
                  <tr>
                    <td valign="top" width="10" style="padding-top:3px;">
                      <span style="display:inline-block;width:6px;height:6px;background:#E77831;border-radius:50%;"></span>
                    </td>
                    <td style="font-size:14px;line-height:22px;color:#132F47;padding:0 0 0 8px;">By trading gold with GTC, you get access to our exclusive <strong style="color:#132F47;">Margin Bonus</strong>.</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA (optional) -->
            <tr>
              <td align="left" style="padding:18px 32px 0 32px;">
                <a href="https://gtcfx.com/" target="_blank"
                   style="background:#E77831;color:#132F47;text-decoration:none;font-weight:600;font-size:14px;line-height:14px;padding:12px 22px;border-radius:8px;display:inline-block;">
                  Go to Dashboard
                </a>
                &nbsp;&nbsp;
                <a href="mailto:support@gmgprime.com"
                   style="background:#ffffff;border:1px solid #265B9F;color:#265B9F;text-decoration:none;font-weight:600;font-size:14px;line-height:14px;padding:12px 22px;border-radius:8px;display:inline-block;">
                  Contact Support
                </a>
              </td>
            </tr>

            <!-- Help line -->
            <tr>
              <td style="padding:14px 32px 0 32px;font-size:14px;line-height:22px;color:#132F47;">
                If you need anything in the meantime, feel free to contact us at
                <a href="mailto:support@gmgprime.com" style="color:#265B9F;text-decoration:underline;">support@gmgprime.com</a>.
              </td>
            </tr>

            <!-- Sign-off -->
            <tr>
              <td style="padding:22px 32px 0 32px;font-size:16px;line-height:24px;color:#132F47;font-weight:600;">
                Best regards,
              </td>
            </tr>
            <tr>
              <td style="padding:4px 32px 8px 32px;font-size:14px;line-height:22px;color:#132F47;">
                Your GMG Team
              </td>
            </tr>

            <!-- Divider -->
            <tr>
              <td style="padding:8px 32px 0 32px;">
                <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="border-top:2px solid #E6ECF2;line-height:0;font-size:0;">&nbsp;</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Contact row -->
            <tr>
              <td style="padding:14px 32px 0 32px;">
                <table width="100%" role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="left" style="padding:0 0 6px 0;">
                      <img src="/new/logo.svg" width="140" alt="GTC" style="display:block;border:0;">
                    </td>
                    <td align="right" style="font-size:13px;line-height:22px;color:#132F47;">
                      📞 Phone: +971 800 667788<br>
                      ✉️ Email:
                      <a href="mailto:support@gmgprime.com" style="color:#265B9F;text-decoration:none;">support@gmgprime.com</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Legal -->
            <tr>
              <td style="padding:18px 32px 0 32px;font-size:11px;line-height:18px;color:#516C84;">
                This website is owned and operated by GTC Global Ltd, a limited company incorporated in Mauritius
                (company number: C188049) and licensed by the Financial Services Commission, Mauritius (No. GB22200292)
                to trade as an SEC-2.1B Investment Dealer. Registered Address: Cyberati Lounge, Ground Floor, The
                Catalyst, Silicon Avenue, 40 Cybercity, 72201 Ebene, Republic of Mauritius. The financial services and
                products promoted on this website are offered by GTC Global Ltd and GTC Global Trade Capital Co.
                Limited, a company authorised by the Vanuatu Financial Services Commission of the Republic of Vanuatu,
                Company License Number: 40354.
                <br><br>
                <strong style="color:#132F47;">GTC Global Ltd and GTC Global Trade Capital Co. Limited</strong> belong to the GTC Financial Group.
                Investing in derivative products carries significant risks and may not be suitable for all investors.
                Leveraging can increase potential loss exposure. Only invest funds you can afford to lose. Seek
                independent advice if needed.
                <br><br>
                <strong style="color:#132F47;">Other Group Entities:</strong> The financial products and services offered on this website are
                <u>NOT</u> provided by the following entities; please visit their respective websites for details.
                <br><br>
                <strong style="color:#132F47;">GTC Group LLC-FZ</strong> — Business License 2311147.01, Dubai, UAE.
                <br><br>
                <strong style="color:#132F47;">GTC Multi Trading DMCC</strong> — No. DMCC-312687; SCA Licence No. 202200000007, Dubai, UAE.
                <br><br>
                Each entity within the GTC Financial Group is managed separately. The products/services on this website
                are ONLY provided by GTC Global Ltd and GTC Global Trade Capital Co. Limited.
                <br><br>
                <strong>Risk Warning:</strong> Trading leveraged products such as forex and derivatives may not be
                suitable for all investors as they carry a high degree of risk to your capital. Ensure you fully
                understand the risks involved and seek independent advice if necessary.
              </td>
            </tr>

            <!-- Social -->
            <tr>
              <td align="center" style="padding:24px 32px 0 32px;">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 6px;">
                      <a href="https://www.facebook.com/GTCFXGlobalTradeCapital" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" width="20" height="20" alt="Facebook" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://x.com/GTC_fx" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" width="20" height="20" alt="X" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" width="20" height="20" alt="YouTube" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://linkedin.com/company/gtcfx-official" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20" height="20" alt="LinkedIn" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://www.instagram.com/gtcfxofficial/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" width="20" height="20" alt="Instagram" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://api.whatsapp.com/send/?phone=448000488461&text&type=phone_number&app_absent=0" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="20" height="20" alt="WhatsApp" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://t.me/gtc_vip_signal" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" width="20" height="20" alt="Telegram" style="display:block;border:0;">
                      </a>
                    </td>
                    <td style="padding:0 6px;">
                      <a href="https://www.tiktok.com/@gtcgroup_official" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3046/3046121.png" width="20" height="20" alt="TikTok" style="display:block;border:0;">
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:16px 32px 32px 32px;font-size:12px;line-height:18px;color:#7C94AB;">
                &copy; 2025 GTCVIP – All Rights Reserved
              </td>
            </tr>
          </table>
          <!-- /Card -->
        </td>
      </tr>
    </table>
  </body>
</html>

    `;
};

export const supportEmailTempelates = (data) => {
  return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Us Query Submitted</title>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #F7F7F7; font-family: 'Outfit', Arial, sans-serif; color: #1e2158; text-align: left; line-height: 22px;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="border-spacing: 0; width: 100%;">
        <tr>
            <td align="center" bgcolor="#F7F7F7">
                <div class="container" style="max-width: 650px; margin: 0 auto; background-color: #192055; padding: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="border-radius: 36px; padding: 20px; background-color: #fff; width: 100%;">
                        <tr>
                            <td class="header" style="padding: 20px; text-align: center;">
                                <img src="https://gmgprime.vercel.app/new/new-logo.svg" alt="GTC Global Capital Trade Logo" style="max-width: 165px; height: auto;">
                            </td>
                        </tr>
                        <tr>
                            <td class="content" style="width: 100%;">
                                <h1 style="color: #192055; text-align:center; font-size: 18px; margin: 0px auto;">
                                    New Contact Us Query Submitted
                                </h1>
                                <h3 style="font-size: 16px; color: #192055;">
                                    Dear Admin/Support Team,
                                </h3>
                                <p>A new query has been submitted through the Contact Us form on our website. Please find the details below to follow up accordingly:</p>
                                
                                <h2 style="color: #192055; font-size: 16px;">Contact Information</h2>
                                <table class="content-table" style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Full Name</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">${data?.firstName} ${data?.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Email Address</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">${data?.workEmail}</td>
                                    </tr>
                                    <tr>
                                        <th style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Phone Number</th>
                                        <td style="padding: 10px; border: 1px solid #ddd;">${data?.phone}</td>
                                    </tr>

                                      <tr>
                      <th
                       style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;"
                      >
                        Company
                      </th>
                      <td style="padding: 10px; border: 1px solid #ddd">
                        ${data?.company}
                      </td>
                    </tr>

                    <tr>
                      <th
                       style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;"
                      >
                        Legal Entity
                      </th>
                      <td style="padding: 10px; border: 1px solid #ddd">
                        ${data?.legalEntity}
                      </td>
                    </tr>

                    <tr>
                      <th
                     style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;"
                      >
                        Website
                      </th>
                      <td style="padding: 10px; border: 1px solid #ddd">
                        ${data?.website}
                      </td>
                    </tr>

                    
                                    <tr style="margin-top:5px;">
                                        <th colspan="2" style="padding: 10px; text-align: left; background-color: #f2f2f2; color: #192055;">Message</th>
                                        
                                    </tr>
                                    <tr>
                                        <td colspan="2" style="padding: 10px; border: 1px solid #ddd;">${data?.notes}</td>
                                    </tr>
                                </table>

                                <p style="line-height: 30px; padding-top: 20px;">Please respond to this query promptly to ensure customer satisfaction. Thank you.</p>
                                <p style="line-height: 30px; padding-top: 20px;">Best Regards,<br><strong style="color: #192055; margin-top: 5px;">GMG Team</strong></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="footer" style="padding: 20px 0px; font-size: 10px; color: #000; background-color: #f7f7f736; border-radius: 0 0 36px 36px; text-align: center;">
                                <div class="social-icons" style="padding-bottom: 10px;">
                                    <a href="https://www.facebook.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                        <img alt="Facebook" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/facebook_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://twitter.com/GTC_fx" style="text-decoration: none;" target="_blank">
                                        <img alt="Twitter" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/twitter_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://linkedin.com/company/gtcfx-official" style="text-decoration: none;" target="_blank">
                                        <img alt="LinkedIn" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/linkedin_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCnKWakjm1b9Bm63xgwNFXHA" style="text-decoration: none;" target="_blank">
                                        <img alt="YouTube" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/youtube_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.instagram.com/gtcfxofficial" style="text-decoration: none;" target="_blank">
                                        <img alt="Instagram" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/instagram_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                    <a href="https://www.tiktok.com/@gtcgroup_official" style="text-decoration: none;" target="_blank">
                                        <img alt="TikTok" src="https://d3k81ch9hvuctc.cloudfront.net/assets/email/buttons/default/tiktok_96.png" style="width: 24px; height: 24px; margin: 0 5px;">
                                    </a>
                                </div>
                               
                                <p style="font-size: 9px; line-height: 13px; text-align: left;">
                                    Disclaimers: The information in this email is for general purposes only and does not constitute personal financial advice. Please assess the relevance of this information to your own financial goals and situation. Investing in contract for difference products carries significant risks and may not be suitable for all investors. Losses may exceed the initial deposit. You do not have ownership rights to the underlying assets of the contract. We advise seeking professional guidance to fully understand the risks before trading. Please review our user terms, risk warnings, privacy policy, and other relevant documents before making financial decisions.
                                </p>
                                <p style="font-size: 9px; line-height: 13px; text-align: left;">
                                    Note that our products and services are not available in restricted countries.
                                </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};
