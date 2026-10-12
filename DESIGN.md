# UNH MECC Website Design Guidelines

## Enduring visual rules

- Keep page content backgrounds white (`#FFFFFF`). Use Wildcat Blue (`#001B43`) for the header and footer.
- Use `UNH_BRAND-RGB_L_Single_W_OL.svg` in the header and `UNH_BRAND-RGB_LS_KO.svg` in the footer, both on blue.
- Keep the web-ready UNH logos in `public/branding/logos/`; source references and social notes remain in root `branding/`.
- Keep the header divider subtle, with the logo aligned far left and a simple, unboxed archive text link aligned far right. Keep the link white with no hover underline.
- Use the Etched reference's tight, consistent viewport edge insets for header and footer content (20px on small screens and 48px on wide screens). Keep the header height fixed; scale the header logo to fill its height.
- Let short pages stretch to the viewport height so the footer sits at the bottom without leaving a blank strip beneath it.
- Keep the footer logo at the left, address centered, and social links at the right on wide screens; vertically center them above the footer divider. Enlarge the knockout logo and social text while keeping the footer compact. On narrow screens, stack and center those items.
- Header and footer text links have no underline on hover; use a subtle opacity shift instead.
- Use section frames and subtle grid lines as layout structure, following the saved reference at `branding/references/Etched.mhtml`. Keep section frames unlabeled and leave whitespace between team cards.
- Do not draw borders around individual cards or photos. Team photo placeholders are neutral gray rectangles with a 4:5 aspect ratio.
- Render team card text in black. Until biographies are supplied, use the configured Lorem ipsum placeholder.
- Order current team cards as faculty advisors, team leads, then remaining members.
- On archive routes, change the header navigation to a plain text link back to the current project. The archive landing page uses a storybook spread that flips when a year on the centered timeline is selected.
- Keep the overall scale restrained: use the shared 85% type scale, narrower content frames, and compact section spacing.
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
- Footer content: Kingsbury Hall, 33 Academic Way, Durham, NH 03824, plus the supplied GitHub and Instagram links.
- Install dependencies with `npm install`; Astro generates the site statically. The archive uses a small client-side script for the page flip and works without a client-side framework.

