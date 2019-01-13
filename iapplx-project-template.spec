Summary: iAppLX Project Template
Name: iapplx-project-template
Version: 0.0.1
Release: 1
BuildArch: noarch
Group: Development/Libraries
License: Commercial
Packager: Colin Stubbs <cstubbs+spam@gmail.com>

%description
iAppLX Project Template

%define IAPP_NAME %{name}
%define IAPP_DIR /var/config/rest/iapps/%{IAPP_NAME}

%prep
%setup -c -T
cp -r %{_topdir}/src .

%build
%{_topdir}/node_modules/jshint/bin/jshint src/**

%install
rm -rf $RPM_BUILD_ROOT

# main install dirs
mkdir -p $RPM_BUILD_ROOT%{IAPP_DIR}

# csdh src
cp  -a src/*.json $RPM_BUILD_ROOT%{IAPP_DIR}
cp  -a src/nodejs $RPM_BUILD_ROOT%{IAPP_DIR}
cp  -a src/presentation $RPM_BUILD_ROOT%{IAPP_DIR}
cp  -a src/workspace $RPM_BUILD_ROOT%{IAPP_DIR}

%clean
rm -rf $RPM_BUILD_ROOT

%files
%defattr(0644,restnoded,restnoded,0755)
%{IAPP_DIR}

%changelog
* Sun Jan 13 2019 Colin Stubbs <cstubbs+spam@gmail.com> - 0.0.1-1
- Initial version
