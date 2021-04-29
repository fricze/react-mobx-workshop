interface Article {
  title: string;
  content: string;
  excerpt: string;
}

const article: Article = {
  title: "021. Expanding Breadth versus Coherency: The EMS Project",
  content: `Nearly all of my job as TA involved email—long, detailed, memos written as email. BillG routinely emailed weekend or late-night missives prompting response chains that would go on for hours. Not missing a “thread” was part of the culture.

Microsoft did not use its own product for email. Well, it sort of did. Microsoft’s email ran on Xenix, a precursor to the Linux operating system, and typically a mail PC was issued that was a dumb terminal connected directly to Xenix computers. Mail was simple plain text with no formatting. Using attachments could be awkward. To alleviate the annoyance of using command lines for email, product team developers wrote mail programs to use in MS-DOS and later Windows that copied mail from Xenix and made it easy to use mail in character mode (WzMail) or GUI mode (WinMail). Given how much time we spent in email, there was no shortage of efforts to build mail programs as side projects. I was a hold out and continued to use my Xenix terminal for as long as they were supported. The big disadvantage to these tools was that all your mail was copied down from the Xenix server to a PC—if your PC hard drive crashed you also lost your mail. Clever people figured out all sorts of ways to avoid this failure point, only pointing out just how important email was and how much time and effort typical employees put into just keeping it working. Windows hanging in the middle of drafting a long message or reply was the sort of thing that ruined your day and happened all too frequently. Everyone had email horror stories.

The rest of the corporate world was light years behind Microsoft and almost never used email outside of the technology teams or other companies in the software and technology industries. IBM was the leader in corporate email, using an arcane mainframe system, Professional Office Systems (PROFS), made famous by Oliver North in the Iran-Contra hearings. Since nobody in the PC industry had mainframes, email was a collection of ad hoc tools and systems that worked well only for relatively small companies, like the one mail product Microsoft had called Microsoft Mail. Microsoft Mail competed with a Lotus-acquired product called cc:Mail, which dominated the email category to the degree it existed. Microsoft Mail was based first on a licensed Macintosh product and then subsequent versions were based on technology acquired from a Canadian company called Network Courier.

There were many other products. I installed and used several of them during my summer internships when simply connecting the computers together was difficult. These early products were built on basic infrastructure of sharing files over dedicated networks—a mailbox was simply a file on another computer and sending mail was for all practical purposes reading data from one file and copying it to another. I’m simplifying for effect.

Because email relied on connecting one set of mail products to another, there was a time when the big telephone companies believed they would provide email service much the same way that they provided voice connectivity, especially since mail between companies involved phone lines. This led to attempts to standardize email using Byzantine standards that only phone companies could love.`,
  excerpt:
    "Through Microsoft Office, even the first versions, Microsoft sold a primitive form of email that worked for small groups of people in the same physical offices. Delivering enterprise email that worked for a company the size of Microsoft, and many times larger (though it would be years before companies would use email the way Microsoft did) was a massive undertaking. The product would become known as Microsoft Exchange and formed the cornerstone of the entire Microsoft enterprise strategy. If you’re looking for an analogy, Exchange was to Windows Server and enterprise computing as Excel was to Windows and the PC desktop. At least I think so. This is a look at the early days from the perspective of BillG strategy and management.",
};

const response = (data: any) => ({
  json: () => ({ data }),
});

const articles: { [key: string]: Article } = {
  "021-expanding-breadth-versus-coherency": article,
};

type Response = Promise<{ json: () => { data: Article } }>;

export const getById = ({ id }: { id: string }): Response =>
  Promise.resolve(response(articles[id]));
