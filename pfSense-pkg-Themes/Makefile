# $FreeBSD$

PORTNAME=	pfSense-pkg-Themes
PORTVERSION=	0.0.1
PORTREVISION=	1
CATEGORIES=	sysutils
MASTER_SITES=	# empty
DISTFILES=	# empty
EXTRACT_ONLY=	# empty

MAINTAINER=	jeffjosejeff@gmail.com
COMMENT=	pfSense package themes

LICENSE=	APACHE20

NO_BUILD=	yes
NO_MTREE=	yes

SUB_FILES=	pkg-install pkg-deinstall
SUB_LIST=	PORTNAME=${PORTNAME}

do-extract:
	${MKDIR} ${WRKSRC}

do-install:
	${MKDIR} ${STAGEDIR}${PREFIX}/pkg
	${INSTALL_DATA} -m 0644 ${FILESDIR}${PREFIX}/pkg/themes.xml \
		${STAGEDIR}${PREFIX}/pkg


	${MKDIR} ${STAGEDIR}/etc/inc/priv
	${INSTALL_DATA} ${FILESDIR}/etc/inc/priv/themes.priv.inc \
		${STAGEDIR}/etc/inc/priv


	${MKDIR} ${STAGEDIR}${PREFIX}/www
	${MKDIR} ${STAGEDIR}${PREFIX}/www/themes
	${INSTALL_DATA} ${FILESDIR}${PREFIX}/www/themes/*.php \
		${STAGEDIR}${PREFIX}/www/themes

	${MKDIR} ${STAGEDIR}/etc/inc/themes
	${INSTALL_DATA} ${FILESDIR}/etc/inc/themes/*.inc \
		${STAGEDIR}/etc/inc/themes


	${MKDIR} ${STAGEDIR}${DATADIR}
	${INSTALL_DATA} ${FILESDIR}${DATADIR}/info.xml \
		${STAGEDIR}${DATADIR}

	@${REINPLACE_CMD} -i '' -e "s|%%PKGVERSION%%|${PKGVERSION}|" \
		${STAGEDIR}${DATADIR}/info.xml \


.include <bsd.port.mk>
