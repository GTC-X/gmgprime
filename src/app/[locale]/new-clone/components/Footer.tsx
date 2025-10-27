export default function Footer() {
  return (
    <footer className="bg-primary-900 py-12 text-sm subtle">
      <div className="container-balanced space-y-6">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-medium mb-2">Secondary trust band</h4>
            <p>Global Markets Group Limited. Trading name <span className="text-white">gmgmarkets.co.uk</span>.</p>
            <p>Authorised and regulated by the Financial Conduct Authority. FRN 744501.</p>
          </div>
          <div className="text-right lg:text-right">
            <p>© {new Date().getFullYear()} Example Ltd. All rights reserved.</p>
          </div>
        </div>
        <p className="text-center opacity-40">Footer</p>
      </div>
    </footer>
  )
}
