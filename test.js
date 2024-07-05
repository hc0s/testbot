function y(e) { window.enmity.plugins.registerPlugin(e) }

const { components: o } = window.enmity;
const l = o.Pressable;

const s = {
    byProps: (...e) => window.enmity.modules.filters.byProps(...e),
    byName: (e, n) => window.enmity.modules.filters.byName(e, n),
    byTypeName: (e, n) => window.enmity.modules.filters.byTypeName(e, n),
    byDisplayName: (e, n) => window.enmity.modules.filters.byDisplayName(e, n)
};

function p(...e) { return window.enmity.modules.bulk(...e) }

const a = window.enmity.modules.common.React;
function b(e) { return window.enmity.patcher.create(e) }

const d = b("picture-link"),
      [g, F, w] = p(
          s.byName("ProfileBanner", false),
          s.byName("HeaderAvatar", false),
          s.byProps("transitionToGuild", "openURL")
      );

const S = {
    name: "PictureLink",
    version: "1.0.2",
    description: "Allows you to click avatars and banners to open them in-app.",
    authors: [{ name: "eternal", id: "263689920210534400" }],
    onStart() {
        d.after(F, "default", (e, [{ user: n, style: m }], i) => {
            var r;
            const t = (r = n == null ? void 0 : n.getAvatarURL) == null ? void 0 : r.call(n, false, 4096, true);
            if (!t) return i;
            const c = n.discriminator % 5,
                  u = typeof t == "number"
                      ? `https://cdn.discordapp.com/embed/avatars/${c}.png`
                      : t == null ? void 0 : t.replace(".webp", ".png");
            return delete i.props.style,
                   a.createElement(l, { onPress: () => w.openURL(u), style: m }, i);
        });

        d.after(g, "default", (e, [{ bannerSource: n }], m) => {
            if (typeof (n == null ? void 0 : n.uri) != "string" || !m) return m;
            const i = n.uri.replace(/(?:\?size=\d{3,4})?$/, "?size=4096").replace(".webp", ".png");
            return a.createElement(l, { onPress: () => w.openURL(i) }, m);
        });
    },
    onStop() {
        d.unpatchAll();
    }
};

y(S);
