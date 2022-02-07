import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
import LogoWithName from "../footer/logo-with-name";
import "./styles.css";
import { IoMdArrowBack } from "react-icons/io";
import Logo from "../../assets/images/icons/Logo_with_text.webp";
import { SiDiscord, SiGithub } from "react-icons/si";

export default function Terms() {
  return (
    <>
      <section className="terms-hero">
        <header className="terms-container terms-row">
          <LogoWithName logo={Logo} />
          <div className="icons-container">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://discord.gg/shibarmynft"
            >
              <SiDiscord />
            </a>
          </div>
        </header>
      </section>
      <div className="terms-container">
        <Link className="back" to="/">
          <IoMdArrowBack className="arrow" />
          Home
        </Link>
        <h1 className="terms-title">Terms & Conditions</h1>
        <p>Last Updated : September 10, 2021</p>
        <p>
          This website is operated by SHIBARMY NFT. Throughout the site, the
          term « Shibarmy NFT », « we », « us » or « our » as the context may
          require, refer to SHIBARMY NFT. By visiting our site and/or purchasing
          something from us, you engage in our Service and agree to be bound by
          the following terms and conditions.
        </p>
        <p>
          We reserve the right to update, change or replace any part of these
          Terms of services without prior written notice at any time, and it is
          your responsibility to periodically review these Terms of Uses to stay
          informed of updates. Any changes to the Terms will be in effect as of
          the « last updated » referenced on the site.
        </p>
        <p>
          Your continued use of this site after the last updated dates will
          constitute your acceptance of agreement.
        </p>
        <p>
          By visiting the website of our products merchants, in particular
          <a href="market.x.immutable.com/">market.x.immutable.com</a>, you also engage and agree
          to be bound by their terms and conditions.
        </p>
        <p>
          This website is for informational purposes and serves as a binding
          contract for purchasers of SHIBARMY NFT NFTs.
        </p>
        <p>
          Shibarmy NFT is a generative collection of digital artwork (NFTs)
          housed and run on the Ethereum Network. Users and Collector of these
          NFTs are solely responsible for the safety and the management of their
          own private assets, which include but are not limited to Ethereum
          Wallets, validating all transactions and contracts generated by this
          website prior to and after purchases.
        </p>
        <p>
          Users certify through purchase that they understand that, as the
          Shibarmy NFT smart contract runs on the Ethereum network and is bound
          by their system and terms, there is no ability to undo, reverse, or
          restore any transactions.
        </p>
        <p>
          Any connected services included this website are provided “as is” and
          “as available” without any warranty of any kind. Use of this website
          constitutes your agreement that you are accepting sole responsibility
          for any and all transactions involving Shibarmy NFT digital
          collectibles.
        </p>
        <p>
          By agreeing to these Terms of Service, you represent that you are at
          least the age of majority in your state or province of residence.
        </p>
        <p>
          You may not use our products and/or services for any illegal or
          unauthorized purpose nor may you, in the use of the Service, violate
          any laws in your jurisdiction (including but not limited to copyright
          laws).
        </p>
        <h2 className="terms-title">Ownership</h2>
        <p>
          When you purchase your Shibarmy NFT, You Own the NFT : the ownership
          is transferred to you on the Ethereum blockchain for that individual
          piece of Art combination of traits and number. Ownership of the NFT is
          ruled by the smart contract and the Ethereum Network terms. We,
          Shibarmy NFT, have no ability to alter, freeze, seize or modify the
          ownership of any Shibarmy NFT.
        </p>
        <h2 className="terms-title">Personal Usage</h2>
        <p>
          Subject to your continued acceptance with these terms, Shibarmy NFT
          allows you a worldwide, royalty-free licence to use, copy and display
          the purchased Art, along with any derivative artwork or extensions
          that you could create or use, limited by the following purposes : (i)
          for your own personal, non commercial use; (ii) as part of a
          marketplace that allows the purchase and sales of you Shibarmy NFT /
          NFT, as long as the marketplace cryptographically verifies that you
          are the owner, to ensure that only the actual owner have the right to
          display the Art; or (iii) as part of a third party website or
          application that permits the inclusion, involvement or participation
          of your Shibarmy NFT, provided that the website or the application
          cryptographically verifies each Shibarmy NFT owner’s right to display
          the Art for their Shibarmy NFT, to ensure that only the actual owner
          can display the Art, and provided that the Art is no longer visible
          once the actual owner of the Shibarmy NFT leave the website or
          application.
        </p>
        <h2 className="terms-title">Commercial Usage</h2>
        <p>
          Subject to actual owner of Shibarmy NFTs continued compliance with
          these Terms, SHIBARMY NFT grant you an unlimited, worldwide licence to
          use, copy and display the purchased Art for the purpose of creating
          derivative works based upon the Art (« COMMERCIAL USAGE »). The only
          exception being not to carry out 3D modeling (sale of figurines)
          because we reserve it for the physical part of our drop. Examples of
          specified Commercial Use would be the use of the Art to produce and
          sell physical merchandise products (T-Shirt, Posters, etc.) displaying
          copie of the purchased Art. Please be aware that nothing in this
          section will be deemed to restrict you from (i) owning or operating a
          marketplace that permits the use and sale of Shibarmy NFT generally,
          provided that the marketplace cryptographically verifies each Shibarmy
          NFT owner’s right to display the Art of their Shibarmy NFT to ensure
          that only the actual owner can display the Art; (ii) owning or
          operating a third party website or application that permits the
          inclusion, involvement, or participation of Shibarmy NFT generally,
          provided that the third party website or application cryptographically
          verifies each Shibarmy NFT owner’s rights to display the Art for their
          Shibarmy NFT to ensure that only the actual owner can display the Art,
          and provided that the Art is no longer visible once the owner of the
          Purchased Shibarmy NFT leaves the website/application; or (iii)
          earning revenue from any of the foregoing.
        </p>
        <p>
          Further, Shibarmy NFT reserves the right to use ANY character,
          including : print or digital advertising, or any purely creative media
          (including short film, anime, etc.) in support of the Shibarmy NFT
          community and message.
        </p>
        <p>
          However, you cannot use the artwork in connection with images of
          hatred, violence or any other inappropriate behavior. The License
          granted in above only applies to the extent that you continue to own
          the relevant NFT. If at any time you trade, donate, giveaway, transfer
          or otherwise dispose of your NFT for any reason, the license granted
          above will immediately expire, without notice, and you will have no
          further right in or to the artwork of this NFT.
        </p>
        <h2 className="terms-title">Shibarmy NFT IP</h2>
        <p>
          Other than the rights to the Art, nothing gives you any rights to any
          other trademarks or other intellectual property rights belonging to
          Shibarmy NFT including, without limitation Shibarmy NFT, SHIBARMY NFT
          and the associated logos. All of these rights are expressly reserved
          in the name of Shibarmy NFT.
        </p>
        <h2 className="terms-title">Feedback</h2>
        <p>
          You can submit comments, bug reports, ideas about the site or the
          project. By submitting any feedback, you agree that we are free to use
          them in any way we choose without additional compensation to you and
          you hereby grant us a perpetual, irrevocable, nonexclusive worldwide
          licence to incorporate and use the feedback for any purpose.
        </p>
        <h2 className="terms-title">Credits</h2>
        <p>
          Website designed and developed by Nico{" "}
          <a
            href="https://github.com/nicoTaccari"
            target="_blank"
            rel="noreferrer"
          >
            <SiGithub size={"1.5em"} className="github" />
          </a>{" "}
          and Arsh.
        </p>
      </div>
      <Footer />
    </>
  );
}
