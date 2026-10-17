# UNH MECC Website Design Guidelines

## Enduring visual rules

- Keep page content backgrounds white (`#FFFFFF`). Use Wildcat Blue (`#001B43`) for the header and footer.
- Use `UNH_BRAND-RGB_L_Single_W_OL.svg` in the header and `UNH_BRAND-RGB_LS_KO.svg` in the footer, both on blue.
- Keep the web-ready UNH logos in `public/branding/logos/`; source references and social notes remain in root `branding/`.
- Keep the header divider subtle, with the logo aligned far left and a simple, unboxed archive text link aligned far right. Keep the link white with no hover underline.
- Use the Etched reference's tight, consistent viewport edge insets for header and footer content (20px on small screens and 48px on wide screens). Keep the header height fixed; scale the header logo to fill its height.
- Let short pages stretch to the viewport height so the footer sits at the bottom without leaving a blank strip beneath it.
- Keep the footer logo at the left, address centered, and social links at the right on wide screens. Enlarge the knockout logo and social text while keeping the footer compact. On narrow screens, stack and center those items. Do not add a footer divider or redundant institutional labels.
- Set footer address and social link text to medium weight (500), between normal body text and the archive timeline labels (550), without changing their sizes or layout.
- Place the `mecc@mastcomputing.com` mailto link centered directly below the footer's postal address, matching its text styling and subtle opacity hover behavior.
- Header and footer text links have no underline on hover; use a subtle opacity shift instead.
- Use section frames and subtle grid lines as layout structure, following the saved reference at `branding/references/Etched.mhtml`. Keep section frames unlabeled and leave whitespace between team cards.
- Add a sparse, pale blue-gray dot pattern only in the wide outer page gutters. Anchor it to the viewport so it stays still while the archive carousel scrolls. Keep framed content, the blue header, and the footer clear.
- Do not draw borders around individual cards or photos. Team photo placeholders are neutral gray rectangles with a 4:5 aspect ratio.
- Render team card text in black. Until biographies are supplied, use the configured Lorem ipsum placeholder.
- Order current team cards as faculty advisors, team leads, then remaining members.
- Keep the header navigation labeled `Archive` on every route; underline it only while an archive route is active. Clicking the UNH logo returns to the current project. Fade only the main content between pages; the blue header and footer remain visually stable. Fade out to white, pause briefly, and fade in within about 410ms total. Respect reduced-motion preferences.
- On desktop, the archive is a scroll-driven vertical carousel with a 30svh lead hold and a 30svh trail hold. The first card is visible immediately on entry; each 60svh of scroll moves the current rounded 4:3 landscape card up and brings the next year's card in from below, then pauses at that year. Give each year that intermediate scroll interval so one ordinary wheel gesture advances one year without a single gesture racing through several years. Keep the sticky stage in place through both edge holds. On smaller screens, use a single stable stage and let cards follow an intentional horizontal drag, with the neighboring card moving alongside. Commit to the next year when release distance reaches about one-third of the stage width; a deliberate flick also advances one year when travel is at least 48px and recent horizontal speed is at least 500px/s in the same direction. Otherwise animate back to the selected card. Resist drags beyond the first and last years. Preserve taps on the active card link, suppress its click after any horizontal drag, and keep vertical page swipes scrolling normally with `touch-action: pan-y`. Extend the mobile clipping stage 12px beyond each side of its section and keep it centered so the card shadow is not cut off at the section gutters; use that expanded stage width for horizontal card travel. Size cards to at most 85% of the section width while keeping them within 72% of the stage height. Show only the selected card at rest and let it travel offscreen during a change. Use a soft drop shadow on the prominent card. Only the foreground card links to its detail page; background cards are not clickable. The selected card crossfades through that year's images automatically. Keep year labels as prominent direct-jump controls in UNH Blue (`#001B43`) on hover and selection; underline only the selected year. Clicking a year smoothly scrolls to the chosen year on desktop and changes the card in one transition on smaller screens. List images for each year under its `images` field in `details/archive/YEAR/index.md`; the first image also serves as the detail page cover, and the optional `coverImage` is a fallback.
- Use the Etched typography hierarchy at the shared 85% site-wide scale: h1 4.0625rem, h2 3.25rem, h3 2.5625rem, h4 2.0625rem, h5 1.6875rem, h6 1.3125rem, body 1.0625rem, and supporting text .875rem. Keep narrower content frames and compact section spacing.
- Keep only the top and bottom page rules full width; section dividers stay between the vertical frame lines to prevent horizontal overflow.
- Keep copy concise and functional. Do not add unverified project claims or filler text outside the configured description placeholder.
- Use Spring Green (`#CBDB2A`) and other accent colors sparingly. Supporting palette may be used for small text and subtle lines only.

## Palette

- Fresh Snow: `#FFFFFF` — page and content backgrounds.
- UNH Wildcat Blue: `#001B43` — footer background and primary text.
- Thermosphere Blue: `#004F9D` — secondary labels and links.
- Spring Green: `#CBDB2A` — sparse accent.
- Land Green: `#008647` and Forest Green: `#145634` — reserve for rare accents.
- Granite Gray: `#776D67` — secondary text.
- Seacoast Blue: `#4C9BD5`, Parchment White: `#F5F4EC`, and Sunrise Pink: `#FEE7D7` are supporting colors only. Sunrise Pink is reserved for financial, budget, or sponsor tier information.

## Typography

- Use a clean, legible sans serif for body text, such as system UI, Inter, or Roboto.
- Use a modern display face for headings where available; system sans serif is acceptable.
- Maintain clear heading hierarchy and comfortable line spacing.
- Use a thin scrollbar with a medium-gray thumb and transparent track, matching the Etched reference.

## Content and editing rules

- The home page order is current project, team, sponsors. The archive index and year detail routes are generated from archive Markdown entries.
- `details/MEMBERS.md` is the canonical current roster. Its YAML frontmatter title and members list are loaded by the Astro `team` content collection. Keep the active card order in this file.
- Each team record uses `name`, `title`, `titleModifiers`, and `description`. The configured Lorem ipsum sentence is placeholder copy; replace each description when approved bios arrive.
- The tenth roster entry remains the pending TBD Business slot until a member is confirmed.
- Team and archive member records may include an optional `photo` path. Photo paths should point into `public/`, for example `/images/team/member-name.jpg`; when omitted, the gray 4:5 photo block remains. Images render with descriptive alt text, lazy loading, async decoding, and `object-fit: cover`.
- `details/archive/TEMPLATE.md` is the schema guide for a new archive year. Copy it to `details/archive/YEAR/index.md`, then fill the project and member data. Put that year's media under `public/archive/YEAR/media/` and reference it with a root-relative path such as `/archive/YEAR/media/cover.webp`. Each year then appears on the timeline and gets a detail page.
- Keep sponsor media as a placeholder until assets arrive.
- Footer content: Kingsbury Hall, 33 Academic Way, Durham, NH 03824, the `mecc@mastcomputing.com` contact link beneath the postal address, plus the supplied GitHub and Instagram links.
- Install dependencies with `npm install`; Astro generates the site statically. The archive's circular motion and image crossfades use a small client-side script without a 3D rendering framework.

