package mobile.application.MobileWorld;

import java.util.Collection;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

 @Configuration
public class MobileConfig {
	 		
		@Autowired
		ResourceService service;
		
		AuthenticationManager manager;
		
		@Bean
		public WebSecurityCustomizer share() {
			return (web)->web.ignoring().antMatchers("/signup");
			
		}
		
		@Bean
		public InMemoryUserDetailsManager silviya() {
			UserDetails myUser1=User.withDefaultPasswordEncoder().username("sil").
					password("manager").roles("USER").build();
			UserDetails myUser2=User.withDefaultPasswordEncoder().username("praba").
					password("primeminister").roles("USER").build();
			Collection<UserDetails> myusers=Stream.of(myUser1,myUser2).toList();
				
			return new InMemoryUserDetailsManager(myusers);
			
		}
		
		@Bean
		public PasswordEncoder encoder() {
			return new BCryptPasswordEncoder();
			
		}
		
		@Bean
		public SecurityFilterChain praba(HttpSecurity hp) throws Exception{
			hp.authorizeRequests().antMatchers("/api/*").authenticated();
 			hp.csrf().disable();
			hp.httpBasic();
			hp.formLogin();
			
			AuthenticationManagerBuilder builder=hp.getSharedObject(AuthenticationManagerBuilder.class);
			builder.userDetailsService(service).passwordEncoder(encoder());
			manager=builder.build();
			hp.authenticationManager(manager);
			
			return hp.build();
			
			
		}


}
