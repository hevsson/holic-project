package com.video.holic.model.utils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DateUtils {

    public static LocalDate formatDate(String asOfDate) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");

        return LocalDate.parse(asOfDate, formatter);
    }

    public static LocalDate formatDateSearch(String asOfDate) {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("ddMMyyyy");

        return LocalDate.parse(asOfDate, formatter);
    }
}
